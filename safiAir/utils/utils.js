const getUserData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (bufferData) => {
        body += bufferData.toString();
      });
      req.on("end", () => {
        resolve(body);
      });
    } catch (err) {
        reject(err)
    }
  });
};
module.exports = {
    getUserData
}