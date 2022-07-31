const moment = require('moment');
const sequelize = require('sequelize');
const { Pengiriman, Customer, Kendaraan, Pengangkutan, Users, Teli, TrackPengiriman, TeliPengiriman } = require('../models');

const dataAssoc = [            
    {
        model: Customer,
        as: 'customers', 
    },
    {
        model: Kendaraan,
        as: 'kendaraans'
    },
    {
        model: Pengangkutan,
        as: 'pengangkutans'
    },
    {
        model: Users,
        as: 'drivers'
    },
    // PR
    {
        model: Teli,
        as: 'teli'
    },
    {
        model: TrackPengiriman,
        as: "history",
        include: [
            {
                model: Users,
                as: "proses_by"
            },
            {
                model: TeliPengiriman,
                as: "teli"
            }
        ]
    }
];

exports.findAllPengiriman = async (req, res) => {
    try {
        const data = await Pengiriman.findAll({
            include: dataAssoc,
            order: [
                ['createdAt', 'DESC'],
            ],
            // attributes: [
            //     'createdAt',
            //     moment('createdAt').format('DD/MM/YYYY')
            // ]
        })
        
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.findPengirimanById = async (req, res) => {
    try {
        const data = await Pengiriman.findByPk(req.params.id, {
            include: dataAssoc
        })
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.createPengiriman = async (req, res) => {
    try {
        const { id: userId = 0 } = req.user;

        var data = await Pengiriman.create({
            ...req.body,
            status: 'diproses',
        }).then(async result => {
            console.log(result);
            // insert history ke tabel TrackPengiriman
            await TrackPengiriman.create({
                userId: userId,
                pengirimanId: result?.id,
                status: 'diproses',
                note: ''
            });
        })

        // ini ada data nya mas. yg disana gak ada,, ohh baru found skrng. coba di sesuaikan.
        res.json({ 'message': 'Pengiriman Created successfully', data:data})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.updatePengiriman = async (req, res) => {
    try {
        const { id: userId = 0 } = req.user; // userId
        const { id } = req.params; // pengirimanId
        const { note, status, teli = null } = req.body; // note

        // update status di tabel Pengiriman
        await Pengiriman.update({
            status: status
        }, {
            where: { id: id }
        });

        // Get Tonase
        const tonase = await Pengiriman.findByPk(id);

        console.log(teli);

        // insert history ke tabel TrackPengiriman
        await TrackPengiriman.create({
            userId: userId,
            pengirimanId: id,
            status: status,
            note: note,
            teli: teli?.map(item => {
                // Calculate tonase divide by how many teli 
                const tonasePerTeli = tonase?.tonase / teli.length;

                return {
                    pengirimanId: tonase?.id,
                    teliId: item.value,
                    tonase: tonasePerTeli
                }
            })
        }, {
            include: ["teli"]
        });

        res.json({ 'message': 'Pengiriman Updated successfully'})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.deletePengiriman = async (req, res) => {
    try {
        await Pengiriman.destroy({
            where: { id: req.params.id}
        })
        res.json({ 'message': 'Pengiriman Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deleteAllPengiriman = async (req, res) => {
    try {
        await Pengiriman.destroy({
            truncate: true
        })
        res.json({ 'message': 'Pengiriman All Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}
