const {
  Pengiriman,
  Customer,
  Kendaraan,
  Pengangkutan,
  Users,
  Teli,
  TrackPengiriman,
  TeliPengiriman,
} = require("../models");
const excelJS = require("exceljs");

const dataAssoc = [
  {
    model: Customer,
    as: "customers",
    include: ["salesUser"],
  },
  {
    model: Kendaraan,
    as: "kendaraans",
  },
  {
    model: Pengangkutan,
    as: "pengangkutans",
  },
  {
    model: Users,
    as: "drivers",
  },
  // PR Relasi
  // {
  //     model: Teli,
  //     as: 'teli'
  // },
  {
    model: TrackPengiriman,
    as: "history",
    include: [
      {
        model: Users,
        as: "proses_by",
      },
      {
        model: TeliPengiriman,
        as: "teli",
        include: [
          {
            model: Teli,
            as: "teliPerson",
          },
        ],
      },
    ],
  },
];

exports.findAllPengiriman = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { role } = req.query;

    let conditions = {};
    if (role === "driver") {
      conditions = { driver: userId };
    } else if (role === "sales") {
      conditions = { "$customers.sales$": userId };
    }
    const data = await Pengiriman.findAll({
      include: dataAssoc,
      where: conditions,
      order: [["createdAt", "DESC"]],
    });

    res.json(data);
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

    var data = await Pengiriman.create({
      ...req.body,
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
    const { note, status, teli = null } = req.body; // note

    // update status di tabel Pengiriman
    await Pengiriman.update(
      {
        status: status,
      },
      {
        where: { id: id },
      }
    );

    // Get Tonase
    const tonase = await Pengiriman.findByPk(id);

    console.log(teli);

    // insert history ke tabel TrackPengiriman
    await TrackPengiriman.create(
      {
        userId: userId,
        pengirimanId: id,
        status: status,
        note: note,
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

    res.json({ message: "Pengiriman Updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePengiriman = async (req, res) => {
  try {
    await Pengiriman.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Pengiriman Deleted successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.deleteAllPengiriman = async (req, res) => {
  try {
    await Pengiriman.destroy({
      truncate: true,
    });
    res.json({ message: "Pengiriman All Deleted successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.downloadData = async (req, res) => {
  Pengiriman.findAll().then((item) => {
    let data = [];

    item.forEach((item) => {
      data.push({
        createdAt: item.createdAt,
        suratJalan: item.suratJalan,
        customers: item.customers,
        drivers: item.drivers,
        kendaraans: item.kendaraans,
        address: item.address,
        salesUser: item.salesUser,
        teliPerson: item.teliPerson,
        note: item.note,
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
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "List Pengiriman.xlsx"
    );

    return workbook.xlsx.write(res).then(() => {
      res.status(200).end();
    });
  });
};
