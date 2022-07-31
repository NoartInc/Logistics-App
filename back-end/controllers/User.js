const { Users } = require('../models');

exports.findAllUsers = async (req, res) => {
    try {
        const data = await Users.findAll({
            order: [
                ['fullName', 'ASC'],
            ]
        })
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.findUserById = async (req, res) => {
    try {
        const data = await Users.findByPk(req.params.id
        )
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.createUser = async (req, res) => {
    try {
        var data = await Users.create(req.body)
        // ini ada data nya mas. yg disana gak ada,, ohh baru found skrng. coba di sesuaikan.
        res.json({ 'message': 'User Created successfully', data:data})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        await Users.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({ 'message': 'User Updated successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await Users.destroy({
            where: { id: req.params.id}
        })
        res.json({ 'message': 'User Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deleteAllUsers = async (req, res) => {
    try {
        await Users.destroy({
            truncate: true
        })
        res.json({ 'message': 'User All Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}
