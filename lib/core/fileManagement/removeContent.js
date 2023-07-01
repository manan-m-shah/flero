import fs from "fs";
import chalk from "chalk";
import open from "open";
import getSafePath from "./getSafePath.js";
import log, { logError, logInfo } from "../logging/logger.js";

const removeContent = async (path, content) => {
  const safePath = getSafePath(path);
  if (!fs.existsSync(safePath)) {
    logError(`${path} does not exist`);
  } else {
    manuallyRemoveContent(path);
  }
};

const manuallyRemoveContent = (path) => {
  log(`1. Remove Content`);
  log(`2. Save the file`);

  open(path);

  // wait for user to save the file
  const watcher = fs.watch(path, (eventType, filename) => {
    if (eventType === "change") {
      logInfo(`File ${filename} saved`);
      watcher.close();
    }
  });
};

export default removeContent;
