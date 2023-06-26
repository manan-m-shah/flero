import fs from "fs";
import path from "path";

const generateFilePath = (userPath) => {
  // remove file name from userPath
  // windows uses \ and unix uses /
  const userPathArray = userPath.split(/\\|\//);
  userPathArray.pop();
  userPath = userPathArray.join("/");
  userPath = path.resolve(userPath);

  // recursively generate file userPath if it doesn't exist
  if (!fs.existsSync(userPath)) {
    fs.mkdirSync(userPath, { recursive: true });
  }
};

export default generateFilePath;
