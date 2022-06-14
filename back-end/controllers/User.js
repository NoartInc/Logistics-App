const User = require('../models/users.js');

exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.findById = async (req, res) => {
    try {
        const user = await User.findById({
            where: { id: req.params.id}
        })
        res.json(user[0])
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.create = async (req, res) => {
    try {
        await User.create(req.body)
        res.json({ 'message': 'User Created successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.update = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({ 'message': 'User Updated successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.delete = async (req, res) => {
    try {
        await User.destroy({
            where: { id: req.params.id}
        })
        res.json({ 'message': 'User Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deleteAll = async (req, res) => {
    try {
        await User.destroyAll({
            where: { id: req.params.id}
        })
        res.json({ 'message': 'User All Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}
