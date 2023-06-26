import { exec } from "child_process";

const execute = (command) => {
  const promise = new Promise((resolve, reject) => {
    exec(command, (error, stdout) => {
      if (error) {
        reject(error);
        return;
      } else {
        resolve(stdout);
      }
    });
  });
  return promise;
};

export default execute;
