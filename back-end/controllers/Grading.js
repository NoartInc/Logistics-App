const { Grading } = require('../models');

exports.findAll = async (req, res) => {
    try {
        const data = await Grading.findAll({
            order: [
                ['gradeName', 'ASC'],
            ]
        })
        res.json(data)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

exports.findById = async (req, res) => {
    try {
        const data = await Grading.findByPk(req.params.id
        )
        res.json(data)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

exports.create = async (req, res) => {
    try {
        var data = await Grading.create(req.body)
        res.json({ 'message': 'Grade Created successfully', data:data})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.update = async (req, res) => {
    try {
        const { gradeName, gradeValue, gradePoin } = req.body;
        await Grading.update({
            gradeName: gradeName,
            gradeValue: gradeValue,
            gradePoin: gradePoin
        }, {
            where: {id: req.params.id}
        })
        res.json({ 'message': 'Grade Updated successfully'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.delete = async (req, res) => {
    try {
        await Grading.destroy({
            where: { id: req.params.id}
        })
        res.json({ 'message': 'Grade Deleted successfully'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}