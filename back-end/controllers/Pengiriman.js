const {
  Pengiriman,
  Customer,
  Kendaraan,
  Pengangkutan,
  Users,
  Teli,
  TrackPengiriman,
  TeliPengiriman,
  Produksi,
  sequelize,
  Grading
} = require("../models");
const excelJS = require("exceljs");
const { Op, Sequelize } = require("sequelize");
const moment = require("moment");
const { getImage, progressDuration, getGradingData, getTerkirimDay } = require("../utils/helper");
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
  {
    model: Produksi,
    as: "produksi_by",
    attributes: ["fullName"],
    // required: true,
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
        model: Produksi,
        as: "produksi_by",
        attributes: ["fullName"],
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
      filters: requestFilters = null
    } = req.query;

    const filters = JSON.parse(requestFilters);
    const offset = (page - 1) * limit;
    const startDate = moment().subtract(120, "days").format("YYYY-MM-DD HH:mm:ss");
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

    if (formatedDateSearch !== "") {
      conditions = {
        ...conditions,
        tanggalOrder: {
          [Op.like]: `%${formatedDateSearch}%`
        }
      }
    }

    // filter data
    if (filters != null) {
      if (filters?.status || filters?.status !== "") {
        conditions = {
          ...conditions,
          status: filters?.status
        }
      }

      if ((filters?.tanggalOrderStart && filters?.tanggalOrderEnd) || (filters?.tanggalOrderStart !== "" && filters?.tanggalOrderEnd !== "")) {
        conditions = {
          ...conditions,
          tanggalOrder: {
            [Op.lte]: moment(`${filters?.tanggalOrderEnd} 23:59:59`).format("YYYY-MM-DD HH:mm:ss"),
            [Op.gte]: moment(`${filters?.tanggalOrderStart} 00:00:00`).format("YYYY-MM-DD HH:mm:ss"),
          }
        }
      }

      if (filters?.progressTime || filters?.progressTime?.length) {
        const progressTimeOptions = filters?.progressTime;
        let groupedProgressTime = [];
        progressTimeOptions.forEach(progressTime => {
          const startRange = (progressTime - 1) * 24
          const endRange = progressTime * 24;
          groupedProgressTime.push({
            [Op.and]: [
              Sequelize.literal(`TIMESTAMPDIFF(HOUR, tanggalOrder, IFNULL(tanggalKirim, NOW())) >= ${startRange}`),
              Sequelize.literal(`TIMESTAMPDIFF(HOUR, tanggalOrder, IFNULL(tanggalKirim, NOW())) < ${endRange}`),
            ]
          });
        });
        if (groupedProgressTime.length) {
          conditions = {
            ...conditions,
            [Op.or]: groupedProgressTime,
          }
        }
      }
    }

    if (search !== "" && !search.match(/\//gi)) {
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

exports.updateInformasi = async (req, res) => {
  try {
    const { fullName } = req.user;
    const { id } = req.params;
    const { informasi } = req.body;
    await Pengiriman.update(
      {
        informasi: informasi
      },
      {
        where: { id: id }
      }
    );
    logging(fullName, "Update Informasi", "Melakukan Update Informasi Pengiriman ke sistem");
    res.json({
      message: "Berhasil mengubah informasi pengiriman"
    });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
}

exports.updateExclude = async (req, res) => {
  try {
    const { fullName } = req.user;
    const { id } = req.params;
    const { exclude } = req.body;
    await Pengiriman.update(
      {
        exclude: exclude
      },
      {
        where: { id: id}
      }
    );
    logging(fullName, "Update exclude pengiriman", `Mengganti exclude pengiriman menjadi ${exclude}, ke sistem`);
    res.json({
      message: "Berhasil mengubah exclude pengiriman"
    });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
}

exports.updatePengiriman = async (req, res) => {
  try {
    const { id: userId = 0 } = req.user; // userId
    const { id } = req.params; // pengirimanId
    const { note, status, teli = null, driver, kendaraan, produksiId } = req.body; // note
    const { fullName } = req.user;
    const currentTime = moment().format("YYYY-MM-DD HH:mm:ss");
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
        kendaraan: kendaraan,
        produksiId: produksiId,
        tanggalKirim: status === "terkirim" ? currentTime : null
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
        produksiId: produksiId,
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
    const updatedData = await Pengiriman.findByPk(id, {
      include: dataAssoc,
    });
    res.json({ message: "Pengiriman Updated successfully", data: updatedData });
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

  const gradings = await Grading.findAll();
  
  pengiriman.forEach((item) => {
    const telis = item?.history.flatMap(entry => entry.teli).find(item => item.teliPerson !== null);
    const teliPersons = telis ? telis.teliPerson.fullName : '';
    const gradingData = getGradingData(gradings, getTerkirimDay(item?.tanggalOrder, item?.tanggalKirim ? item?.tanggalKirim : moment().format("YYYY-MM-DD HH:mm:ss")));
    data.push({
      createdAt: item.createdAt,
      suratJalan: item.suratJalan || "",
      status: item.status || "",
      customers: item.customers?.customer,
      tonase: item.tonase || "",
      pengangkutan: item.pengangkutans?.pengangkutan || "",
      drivers: item.drivers?.fullName || "",
      kendaraans: item.kendaraans?.kendaraan || "",
      address: item.address || "",
      salesUser: item.customers?.salesUser?.fullName || "",
      gudang: item.gudang || "",
      // teliPerson: item.teliPerson || "",
      teliPerson: teliPersons,
      note: item.note || "",
      updatedAt: item.updatedAt,
      informasi: item?.informasi || "",
      tanggalOrder: item?.tanggalOrder ? moment(item?.tanggalOrder).format("DD/MM/YYYY HH:mm") : "-",
      tanggalKirim: item?.tanggalKirim ? moment(item?.tanggalKirim).format("DD/MM/YYYY HH:mm") : "-",
      // progressTime: item?.tanggalOrder || item?.tanggalKirim ? progressDuration(item?.tanggalOrder, item?.tanggalKirim ? item?.tanggalKirim : "now") : "-",
      progressTime: item?.exclude ? "Exclude" : gradingData == "-" ? "Expired" : `${gradingData?.gradeName} ${gradingData?.gradePoin == "0" ? "(Expired)" : ""}`,
    });
  });

  

  const workbook = new excelJS.Workbook(); // Create a new workbook
  const worksheet = workbook.addWorksheet("List Pengiriman"); // New Worksheet
  const path = "./public/files"; // Path to download excel

  // Column for data in excel. key must match data key
  worksheet.columns = [
    {
      header: "Surat Jalan",
      key: "suratJalan",
      width: "10",
    },
    {
      header: "Status",
      key: "status",
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
      header: "Gudang",
      key: "gudang",
      width: "10",
    },
    {
      header: "Note",
      key: "note",
      width: "10",
    },
    {
      header: "Informasi",
      key: "informasi",
      width: "20",
    },
    {
      header: "Tanggal Order",
      key: "tanggalOrder",
      width: "18",
    },
    {
      header: "Lead Time",
      key: "progressTime",
      width: "18",
    },
    {
      header: "Tanggal Terkirim",
      key: "tanggalKirim",
      width: "18",
    },
    // {
    //   header: "Durasi",
    //   key: "durasi",
    //   width: "18",
    // },
    {
      header: "CreatedAt",
      key: "createdAt",
      width: "12",
    },
    {
      header: "UpdatedAt",
      key: "updatedAt",
      width: "14",
    }
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
      { count: 0, status: "dicetak" },
      { count: 0, status: "dimuat" },
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
