const moment = require("moment");

const getImage = (req, file) => {
  if (file) {
    const { originalname } = file;
    //const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const currentTime = moment().format("YYYYMMDDHHmmss");
    const uniqueSuffix = `${req?.body?.suratJalan}-${currentTime}`;
    let fileExtension = originalname.split(".").pop();
    let fileData = `${uniqueSuffix}.${fileExtension}`;
    return fileData;
  } else {
    return undefined;
  }
};

module.exports = { getImage };
