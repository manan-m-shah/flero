import fs from "fs";
import path from "path";

const loadJson = (jsonPath) => {
  const json = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  return json;
};

export default loadJson;
