const getImage = (file) => {
  if (file) {
    const { originalname } = file;
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    let fileExtension = originalname.split(".").pop();
    let fileData = `${uniqueSuffix}.${fileExtension}`;
    return fileData;
  } else {
    return undefined;
  }
};

module.exports = { getImage };
