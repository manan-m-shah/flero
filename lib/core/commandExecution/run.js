import execute from "./execute.js";
import log from "../logging/index.js";

const run = async (command) => {
  const result = await execute(command);
  log(result);
};

export default run;
