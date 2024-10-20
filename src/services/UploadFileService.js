const path = require("path");
const fs = require("fs");
const xlsx = require("node-xlsx");
const { configFileUploadxlsx } = require("../middleware/configFIleUploadxlsx");

const handleUploadSingleFileName = async (fileObject) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  const pathName = path.resolve(__dirname, `../public/images/`);
  let uploadPath = pathName;

  let extName = path.extname(fileObject.name);

  //get image's name (without extension)
  let baseName = path.basename(fileObject.name, extName);

  //create final path: eg: /upload/your-image.png
  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;

  try {
    await fileObject.mv(finalPath);
    return {
      status: "success",
      path: finalName,
      error: null,
    };
  } catch (err) {
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(err),
    };
  }
};

const handleUploadMultipleFile = async (fileObject) => {
  console.log("fileObject", fileObject);
  try {
    const results = fileObject.map(async (file) => {
      const pathName = path.join(__dirname, `../public/images/${file.name}`);
      let uploadPath = pathName;
      return await file.mv(uploadPath);
    });
    return results;
  } catch (err) {
    return {
      status: "failed",
    };
  }
};

const uploadFileExcel = async (fileObject) => {
  const pathName = path.join(__dirname, `../public/files/${fileObject.name}`);
  let uploadPath = pathName;
  try {
    const data = await fileObject.mv(uploadPath);
    const workSheetsFromFile = xlsx.parse(pathName);
    const dataExcel = [];
    workSheetsFromFile[0].data.map((item) => {
      if (item.length > 0) {
        dataExcel.push(item);
      }
    });
    return configFileUploadxlsx(dataExcel);
  } catch (err) {
    return err;
  }
};

module.exports = {
  handleUploadSingleFileName,
  handleUploadMultipleFile,
  uploadFileExcel,
};
