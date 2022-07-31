const { Kendaraan } = require('../models');

exports.findAllKendaraan = async (req, res) => {
    try {
        const data = await Kendaraan.findAll({
            order: [
                ['kendaraan', 'ASC'],
            ]
        })
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.findKendaraanById = async (req, res) => {
    try {
        const data = await Kendaraan.findByPk(req.params.id
        )
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.createKendaraan = async (req, res) => {
    try {
        var data = await Kendaraan.create(req.body)
        res.json({ 'message': 'Kendaraan Created successfully', data:data})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.updateKendaraan = async (req, res) => {
    try {
        await Kendaraan.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({ 'message': 'Kendaraan Updated successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deleteKendaraan = async (req, res) => {
    try {
        await Kendaraan.destroy({
            where: { id: req.params.id}
        })
        res.json({ 'message': 'Kendaraan Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deleteAllKendaraan = async (req, res) => {
    try {
        await Kendaraan.destroy({
            truncate: true
        })
        res.json({ 'message': 'Kendaraan All Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}
