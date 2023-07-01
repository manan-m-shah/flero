import fs from "fs";
import getSafePath from "./getSafePath.js";
import generateFilePath from "./generateFilePath.js";
import getFile from "./getFile.js";
import { logInfo } from "../logging/logger.js";

const createFile = async (path) => {
  const safePath = getSafePath(path);
  generateFilePath(safePath);
  const file = await getFile(
    "https://raw.githubusercontent.com/manan-m-shah/joks/main/README.md"
  );
  //   add file to path
  try {
    fs.writeFileSync(safePath, file);
    logInfo(`${path} created`);
  } catch (error) {
    throw new Error(`Failed to add file: ${error.message}`);
  }
};

export default createFile;
