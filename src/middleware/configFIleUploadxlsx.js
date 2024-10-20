const configFileUploadxlsx = (data) => {
    console.log('data',data);
  const headers = data[0];
  const result = data.slice(1).map((row) => {
    let obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj
  });
  return result;
};

module.exports = { configFileUploadxlsx };
