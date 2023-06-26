import path from "path";

const getSafePath = (userPath) => {
  const basePath = "./";
  const fullPath = path.join(basePath, userPath);
  const resolvedPath = path.resolve(fullPath);
  const isSafePath = resolvedPath.startsWith(process.cwd());
  if (isSafePath) {
    return resolvedPath;
  } else {
    throw new Error(`Path is not safe: ${userPath}`);
  }
};

export default getSafePath;
