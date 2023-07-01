import fs from "fs";
import chalk from "chalk";
import clipboardy from "clipboardy";
import axios from "axios";
import open from "open";
import getSafePath from "./getSafePath.js";
import createFile from "./createFile.js";
import log, { logError, logInfo } from "../logging/index.js";

const addContent = async (path, content) => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/manan-m-shah/joks/main/README.md"
    );
    const content = response.data;
    path = getSafePath(path);
    if (!fs.existsSync(path)) {
      createFile(path);
    } else {
      clipboardy.writeSync(content);
      manuallyAddContent(path);
    }
  } catch (error) {
    logError(error);
  }
};

const manuallyAddContent = (path) => {
  log(`1. Paste the auto-copied content at the top`);
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

export default addContent;
