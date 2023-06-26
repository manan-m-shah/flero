import execute from "./execute.js";

const run = async (command) => {
  const result = await execute(command);
  console.log(result);
};

export default run;
