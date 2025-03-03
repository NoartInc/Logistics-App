const { PengirimanIssue } = require('../models');
const { Op } = require("sequelize")

exports.findAllPengirimanIssue = async (req, res) => {
    try {
        const {search, limit} = req.query
        let conditions = {}
        if(search){
            conditions = {
                issueName: {
                    [Op.like]: `%${search}%`,
                }
            }
        }
        const config = {
            where: conditions,
            order: [
                ['issueName', 'ASC'],
            ]
        }
        if(limit){
            config.limit = Number(limit)
        }
        const data = await PengirimanIssue.findAll(config)
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.findPengirimanIssueById = async (req, res) => {
    try {
        const data = await PengirimanIssue.findByPk(req.params.id)
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.createPengirimanIssue = async (req, res) => {
    try {
        var data = await PengirimanIssue.create(req.body)
        res.json({ 'message': 'PengirimanIssue Created successfully', data:data})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.updatePengirimanIssue = async (req, res) => {
    try {
        await PengirimanIssue.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({ 'message': 'PengirimanIssue Updated successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deletePengirimanIssue = async (req, res) => {
    try {
        await PengirimanIssue.destroy({
            where: { id: req.params.id}
        })
        res.json({ 'message': 'PengirimanIssue Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deleteAllPengirimanIssue = async (req, res) => {
    try {
        await PengirimanIssue.destroy({
            truncate: true
        })
        res.json({ 'message': 'PengirimanIssue All Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

