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

const progressDuration = (start, end = "now") => {
  const startDate = moment(start);
  const endDate = end === "now" ? moment() : moment(end);
  const duration = moment.duration(endDate.diff(startDate));
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  let formattedDuration = "";

  if (days !== 0) {
    formattedDuration += `${days}d`;
  }

  if (hours !== 0) {
    formattedDuration += ` ${hours}h`;
  }

  if (minutes !== 0) {
    formattedDuration += ` ${minutes}m`;
  }

  return formattedDuration.trim();
}

const getTerkirimDay = (start, end) => {
  if (end === null) {
    return null;
  }

  const startDate = moment(start);
  const endDate = moment(end);
  const duration = moment.duration(endDate.diff(startDate));
  const hours = duration.asHours();
  return hours;
}

const getGradingData = (gradings, hoursCount) => {
  if (hoursCount === null) {
    return "-";
  }

  const matchingGrade = gradings?.find(grade => {
      const startRange = (parseInt(grade.gradeValue) - 1) * 24;
      const endRange = parseInt(grade.gradeValue) * 24;
      return hoursCount >= startRange && hoursCount < endRange;
  });

  return matchingGrade ? matchingGrade : "-";
}

module.exports = { getImage, getGradingData, getTerkirimDay, progressDuration };
