const {
  Pengiriman,
  Customer,
  Kendaraan,
  Pengangkutan,
  Users,
  Teli,
  TrackPengiriman,
  TeliPengiriman,
  sequelize,
} = require("../models");
const excelJS = require("exceljs");
const { Op } = require("sequelize");
const moment = require("moment");
const { getImage } = require("../utils/helper");
const logging = require("../utils/logging");

const dataAssoc = [
  {
    model: Customer,
    as: "customers",
    include: [
      {
        model: Users,
        as: "salesUser",
        attributes: ["fullName"],
        required: true,
      },
    ],
    attributes: ["customer"],
    required: true,
  },
  {
    model: Kendaraan,
    as: "kendaraans",
    attributes: ["kendaraan"],
    required: true,
  },
  {
    model: Pengangkutan,
    as: "pengangkutans",
    attributes: ["pengangkutan", "address"],
  },
  {
    model: Users,
    as: "drivers",
    attributes: ["fullName", "contact"],
    required: true,
  },
  // PR Relasi
  // {
  //     model: Teli,
  //     as: 'teli'
  // },
  {
    model: TrackPengiriman,
    as: "history",
    attributes: ["createdAt", "note", "status", "image"],
    include: [
      {
        model: Users,
        as: "proses_by",
        attributes: ["fullName", "jabatan"],
      },
      {
        model: TeliPengiriman,
        as: "teli",
        attributes: ["id"],
        include: [
          {
            model: Teli,
            as: "teliPerson",
            attributes: ["fullName"],
          },
        ],
      },
    ],
  },
];

exports.findAllPengiriman = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const {
      role,
      page = 1,
      limit = 25,
      orderby = "id",
      orderdir = "desc",
      search = "",
    } = req.query;

    const offset = (page - 1) * limit;
    const startDate = moment()
      .subtract(15, "days")
      .format("YYYY-MM-DD HH:mm:ss");
    const endDate = moment().format("YYYY-MM-DD HH:mm:ss");
    let formatedDateSearch = "";
    if (search.match(/\//gi)) {
      let parseDate = search.split("/");
      formatedDateSearch = moment(
        new Date(`${parseDate[2]}-${parseDate[1]}-${parseDate[0]}`)
      ).format("YYYY-MM-DD");
    }

    let conditions = {
      createdAt: {
        [Op.between]: [startDate, endDate],
      },
    };
    if (role === "driver") {
      conditions = { driver: userId };
    } else if (role === "sales") {
      conditions = { "$customers.sales$": userId };
    }

    if (search !== "") {
      conditions = {
        ...conditions,
        [Op.or]: {
          suratJalan: {
            [Op.like]: `%${search.toLowerCase()}%`,
          },
          status: {
            [Op.like]: `%${search.toLowerCase()}%`,
          },
          "$drivers.fullName$": {
            [Op.like]: `%${search.toLowerCase()}%`,
          },
          "$customers.customer$": {
            [Op.like]: `%${search.toLowerCase()}%`,
          },
          "$kendaraans.kendaraan$": {
            [Op.like]: `%${search.toLowerCase()}%`,
          },
          "$customers.salesUser.fullName$": {
            [Op.like]: `%${search.toLowerCase()}%`,
          },
        },
      };
    }

    const data = await Pengiriman.findAndCountAll({
      distinct: true,
      where: conditions,
      include: dataAssoc,
      order: [[orderby, orderdir]],
      limit: Number(limit),
      offset: Number(offset),
    });

    let last_page = Math.ceil(data.count / Number(limit));
    let result = {
      ...data,
      pageCount: last_page,
    };

    res.json(result);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.findPengirimanById = async (req, res) => {
  try {
    const data = await Pengiriman.findByPk(req.params.id, {
      include: dataAssoc,
    });
    res.json(data);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.createPengiriman = async (req, res) => {
  try {
    const { id: userId = 0 } = req.user;
    const { fullName } = req.user;
    var data = await Pengiriman.create({
      ...req.body,
      pengangkutan: req.body.pengangkutan === "" ? 0 : req.body.pengangkutan,
      driver: req.body.driver === "" ? 0 : req.body.driver,
      kendaraan: req.body.kendaraan === "" ? 0 : req.body.kendaraan,
      status: "diproses",
    }).then(async (result) => {
      // insert history ke tabel TrackPengiriman
      await TrackPengiriman.create({
        userId: userId,
        pengirimanId: result?.id,
        status: "diproses",
        note: "",
      });
      return result;
    });

    // ini ada data nya mas. yg disana gak ada,, ohh baru found skrng. coba di sesuaikan.
    logging(fullName, "Create Data", "Melakukan Create Pengiriman ke sistem");
    res.json({
      message: "Pengiriman Created successfully",
      data: Pengiriman.findByPk(data?.id, { include: dataAssoc }),
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.updatePengiriman = async (req, res) => {
  try {
    const { id: userId = 0 } = req.user; // userId
    const { id } = req.params; // pengirimanId
    const { note, status, teli = null, driver, kendaraan } = req.body; // note
    const { fullName } = req.user;
    let filename = null;
    if (req.file) {
      filename = req.file?.filename;
    }

    // update status di tabel Pengiriman
    // Disini saya tinggal ambah driver: driver, kendaraan: kendaraan kah ? 
    // iyap
    // pastikan nama field di table'nya ini ya ?
    await Pengiriman.update(
      {
        status: status,
        driver: driver, 
        kendaraan: kendaraan
      },
      {
        where: { id: id },
      }
    );

    // Get Tonase
    const tonase = await Pengiriman.findByPk(id);

    // insert history ke tabel TrackPengiriman
    await TrackPengiriman.create(
      {
        userId: userId,
        pengirimanId: id,
        status: status,
        note: note,
        image: filename ? `/images/${filename}` : null,
        teli: teli?.map((item) => {
          // Calculate tonase divide by how many teli
          const tonasePerTeli = tonase?.tonase / teli.length;

          return {
            pengirimanId: tonase?.id,
            teliId: item.value,
            tonase: tonasePerTeli,
          };
        }),
      },
      {
        include: ["teli"],
      }
    );
    logging(fullName, "Update Status", "Melakukan Update Pengiriman ke sistem");
    res.json({ message: "Pengiriman Updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * Update data on single table only
 * on table Pengirimans only
 */
exports.updateData = async (req, res) => {
  try {
    // mau pakai userName / fullName ? fullName aja
    // oke sesuaikan aja
    const { id: userId = 0, fullName } = req.user; // userId, butuh ini buat logg ? butuh mas oke
    const { id } = req.params; // pengirimanId
    const { driver, kendaraan } = req.body; 

    await Pengiriman.update(
      { 
        driver: driver, 
        kendaraan: kendaraan
      },
      {
        where: { id: id },
      }
    );
    logging(fullName, "Edit Data", "Melakukan Edit Pengiriman ke sistem");
    res.json({ message: "Pengiriman Updated successfully" });
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
}

exports.deletePengiriman = async (req, res) => {
  try {
    const { id: userId = 0, fullName } = req.user;
    await Pengiriman.destroy({
      where: { id: req.params.id },
    });
    logging(fullName, "Delete Data", "Melakukan Delete Pengiriman ke sistem");
    res.json({ message: "Pengiriman Deleted successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.deleteAllPengiriman = async (req, res) => {
  try {
    const { fullName } = req.user;
    await Pengiriman.destroy({
      truncate: true,
    });
    logging(fullName, "Delete All Data", "Melakukan Delete All Pengiriman ke sistem");
    res.json({ message: "Pengiriman All Deleted successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.downloadData = async (req, res) => {
  const { startDate, endDate } = req.query;
  const pengiriman = await Pengiriman.findAll({
    include: dataAssoc,
    where: {
      createdAt: {
        [Op.lt]: new Date(
          new Date(endDate).getTime() + 60 * 60 * 24 * 1000 - 1
        ),
        [Op.gt]: new Date(startDate),
      },
    },
    order: [["createdAt", "DESC"]],
  });
  let data = [];

  pengiriman.forEach((item) => {
    data.push({
      createdAt: item.createdAt,
      suratJalan: item.suratJalan || "",
      customers: item.customers?.customer,
      tonase: item.tonase || "",
      pengangkutan: item.pengangkutans?.pengangkutan || "",
      drivers: item.drivers?.fullName || "",
      kendaraans: item.kendaraans?.kendaraan || "",
      address: item.address || "",
      salesUser: item.customers?.salesUser?.fullName || "",
      teliPerson: item.teliPerson || "",
      note: item.note || "",
    });
  });

  const workbook = new excelJS.Workbook(); // Create a new workbook
  const worksheet = workbook.addWorksheet("List Pengiriman"); // New Worksheet
  const path = "./public/files"; // Path to download excel

  // Column for data in excel. key must match data key
  worksheet.columns = [
    {
      header: "Date",
      key: "createdAt",
      width: "10",
    },
    {
      header: "Surat Jalan",
      key: "suratJalan",
      width: "10",
    },
    {
      header: "Customer",
      key: "customers",
      width: "10",
    },
    {
      header: "Tonase",
      key: "tonase",
      width: "10",
    },
    {
      header: "Pengangkutan",
      key: "pengangkutan",
      width: "10",
    },
    {
      header: "Driver",
      key: "drivers",
      width: "10",
    },
    {
      header: "Kendaraan",
      key: "kendaraans",
      width: "10",
    },
    {
      header: "Address",
      key: "address",
      width: "30",
    },
    {
      header: "Sales",
      key: "salesUser",
      width: "10",
    },
    {
      header: "Teli",
      key: "teliPerson",
      width: "10",
    },
    {
      header: "Note",
      key: "note",
      width: "10",
    },
  ];

  worksheet.addRows(data);

  //Making first line in excel bold
  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
  });

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  
  return await workbook.xlsx
    .writeFile(`${path}/List-Pengiriman.xlsx`)
    .then((data) => {
      res.status(200).send({
        status: "success",
        message: "file successfully downloaded",
        path: `${path}/List-Pengiriman.xlsx`,
      });
    });
};

exports.getDashboard = async (req, res) => {
  try {
    const summary = [
      { count: 0, status: "diproses" },
      { count: 0, status: "dimuat" },
      { count: 0, status: "termuat" },
      { count: 0, status: "dikirim" },
      { count: 0, status: "terkirim" },
      { count: 0, status: "pending" },
      { count: 0, status: "cancel" },
    ];

    const [results] = await sequelize.query(
      "SELECT count(*) as count, status from Pengirimans group by status"
    );

    const summaries = summary.map((item) => {
      const findData = results.find((result) => result.status === item.status);
      if (findData) {
        return findData;
      }
      return item;
    });

    res.status(200).send({
      status: "success",
      results: summaries,
    });
  } catch (error) {}
};
