import axios from "axios";

//TODO : instance가 뭔지 찾아보기
//baseURL 은 공통적으로 들어가는 부분
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instance.interceptors.response.use((reponse) => {
  console.log("instance interceptors reponse", reponse);
  if (reponse.data?.status === "Error") {
    throw reponse;
  }
  return reponse;
});

// try catch 문으로 제이슨 플레이스 홀더랑 통신하기
export const onRequest = async () => {
  try {
    return await instance.get("/posts");
  } catch (error) {
    throw error.data;
  }
};

// axios 부분에서 나는 posts 만 사용해서 저렇게 한건데 나머지 다 불러올 때는 아래 같이 해두고 axios 쓸때 onRequest("/posts") onRequest("/photo") 이런식으로 하면 좀더 간결한 코드가 됨!

// export const onRequest = async(url) => {
//   try{
//     return await instance.get(url);
//   } catch(error){
//     throw error.data;
//   }
// }
