const { Produksi } = require('../models');
const { Op } = require("sequelize")

exports.findAllProduksi = async (req, res) => {
    try {
        const {search, limit} = req.query
        let conditions = {}
        if(search){
            conditions = {
                fullName: {
                    [Op.like]: `%${search}%`,
                }
            }
        }
        const config = {
            where: conditions,
            order: [
                ['fullName', 'ASC'],
            ]
        }
        if(limit){
            config.limit = Number(limit)
        }
        const data = await Produksi.findAll(config)
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.findProduksiById = async (req, res) => {
    try {
        const data = await Produksi.findByPk(req.params.id
        )
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.createProduksi = async (req, res) => {
    try {
        var data = await Produksi.create(req.body)
        res.json({ 'message': 'Produksi Created successfully', data:data})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.updateProduksi = async (req, res) => {
    try {
        await Produksi.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({ 'message': 'Produksi Updated successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deleteProduksi = async (req, res) => {
    try {
        await Produksi.destroy({
            where: { id: req.params.id}
        })
        res.json({ 'message': 'Produksi Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deleteAllProduksi = async (req, res) => {
    try {
        await Produksi.destroy({
            truncate: true
        })
        res.json({ 'message': 'Produksi All Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

