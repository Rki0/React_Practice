import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instance.interceptors.response.use((response) => {
  console.log("instance interceptors response", response);
  if (response.data.status === "Error") {
    throw response;
  }
  return response;
});

export const onRequest = async () => {
  try {
    return await instance.get("/posts");
  } catch (e) {
    throw e.data;
  }
};
