import loadJson from "./loadJson.js";

const packageJson = loadJson("package.json");

const version = packageJson.version;

export { version };
export default packageJson;
