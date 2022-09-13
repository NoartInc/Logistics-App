const fs = require("fs");
const path = require("path");
const moment = require("moment");

const logPath = path.resolve("logs", `${moment().format("YYYY-MM-DD")}.json`);

const logging = async (user, action, description) => {
  try {
    const logMessage = {
      time: moment().format("DD/MM/YYYY HH:mm:ss"),
      user: user,
      action: action,
      description: description,
    };

    if (!fs.existsSync(logPath)) {
      fs.writeFileSync(logPath, JSON.stringify([logMessage]));
      console.log(`Create activity on ${logPath}`);
    } else {
      let data = fs.readFileSync(logPath);
      let dataFile = JSON.parse(data);
      fs.writeFileSync(logPath, JSON.stringify([...dataFile, logMessage]));
      console.log(`Update activity on ${logPath}`);
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * Cara penggunaan logging di controller
 * const logging = require("../utils/logging.js");
 *
 * lalu panggil function logging di setiap aksi yang ingin
 * di record activity'nya
 *
 * ada 3 parameter
 * param1 = user
 * param2 = tipe / jenis aksi (Create, Update, Delete)
 * param3 = deskripsi detail aksi yang dilakukan
 *
 * contoh bisa dilihat pada controller auth
 * cara call function:
 *
 * logging("afif","Login","Melakukan login ke sistem");
 *
 * file logging tersimpan pada directory
 * /logs/[nama-file-log-dihari-itu-dengan-format-YYYY-MM-DD].json
 * file ini bisa ditampilkan ke front-end jika mau
 * tinggal buat controllernya, lalu lakukan fs.readFile, berikan res.json(hasilReadFile);
 * untuk dapat di tampilkan di front-end
 *
 */

module.exports = logging;
