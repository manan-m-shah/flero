import fs from "fs";
import getSafePath from "./getSafePath.js";
import generateFilePath from "./generateFilePath.js";
import getFile from "./getFile.js";

const addFile = async (path) => {
  path = getSafePath(path);
  generateFilePath(path);
  const file = await getFile(
    "https://raw.githubusercontent.com/manan-m-shah/joks/main/README.md"
  );
//   add file to path
  try {
    fs.writeFileSync(path, file);
  } catch (error) {
    throw new Error(`Failed to add file: ${error.message}`);
  }
};

export default addFile;
