import fs from "fs";
import getSafePath from "./getSafePath.js";
import { logError, logInfo } from "../logging/logger.js";

const deleteFile = (path) => {
  const safePath = getSafePath(path);
  if (fs.existsSync(safePath)) {
    fs.rmSync(safePath, { recursive: true });
    logInfo(`${path} deleted`);
  } else {
    logError("Invalid delete path");
  }
};

export default deleteFile;
