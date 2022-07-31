const { Teli } = require('../models');

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
