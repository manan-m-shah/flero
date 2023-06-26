import axios from "axios";

const getFile = async (remoteURL) => {
  try {
    const response = await axios.get(remoteURL);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch file: ${error.message}`);
  }
};

export default getFile;
