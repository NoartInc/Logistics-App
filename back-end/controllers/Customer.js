const { Customer } = require("../models");

exports.findAllCustomer = async (req, res) => {
  try {
    const data = await Customer.findAll({
      include: ["salesUser"],
      order: [["customer", "ASC"]],
    });
    res.json(data);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.findCustomerById = async (req, res) => {
  try {
    const data = await Customer.findByPk(req.params.id);
    res.json(data);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.createCustomer = async (req, res) => {
  try {
    var data = await Customer.create(req.body);
    res.json({
      message: "Customer Created successfully",
      data: await Customer.findByPk(data?.id, { include: ["salesUser"] }),
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    await Customer.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Customer Updated successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Customer Deleted successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.deleteAllCustomer = async (req, res) => {
  try {
    await Customer.destroy({
      truncate: true,
    });
    res.json({ message: "Customer All Deleted successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
