const { Teli, TeliPengiriman } = require('../models');
const { Op } = require("sequelize")
const moment = require("moment");

exports.findAllTeli = async (req, res) => {
    try {
        const data = await Teli.findAll({
            order: [
                ['fullName', 'ASC'],
            ]
        })
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.findTeliById = async (req, res) => {
    try {
        const data = await Teli.findByPk(req.params.id
        )
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.createTeli = async (req, res) => {
    try {
        var data = await Teli.create(req.body)
        res.json({ 'message': 'Teli Created successfully', data:data})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.updateTeli = async (req, res) => {
    try {
        await Teli.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({ 'message': 'Teli Updated successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deleteTeli = async (req, res) => {
    try {
        await Teli.destroy({
            where: { id: req.params.id}
        })
        res.json({ 'message': 'Teli Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deleteAllTeli = async (req, res) => {
    try {
        await Teli.destroy({
            truncate: true
        })
        res.json({ 'message': 'Teli All Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.countTonase = async (req, res) => {
    try {
        const { id } = req.params;
        const { startDate, endDate } = req.query;

        const teli = await TeliPengiriman.findAll({
            where: { 
                teliId: id,
                createdAt: {
                    [Op.between]: [moment(startDate).format("YYYY-MM-DD HH:mm:ss"), moment(endDate).format("YYYY-MM-DD HH:mm:ss")]
                }
            }
        });
        const result = {
            total: teli.reduce((acc, cur) => {
                return acc += cur.tonase;
            }, 0)
        }

        return res.json(result);
    } catch (err) {
        return res.json({ message: err.message })
    }
}

exports.deleteCount = async (req, res) => {
    try {
        const val = await TeliPengiriman.destroy({
            where : { tonase },
            truncate: true
        })
        return res.json(val)
    } catch (err) {
        res.json({ message: err.message })
    }
}