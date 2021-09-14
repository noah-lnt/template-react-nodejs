import axios from "../utils/axiosConfig";

const helloWorld = (callback) => {
  axios("hello-world")
    .then(() => callback({ success: true }))
    .catch(() => callback({ success: false }));
};

export { helloWorld};