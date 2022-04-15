import { useDispatch } from "react-redux";
import { onRequest } from "../common/axios";
// import { getPosts } from "../Redux/Post";
import { getPosts } from "../Redux/Post";

export const useHome = () => {
  const dispatch = useDispatch();

  const fetchPosts = async () => {
    try {
      const response = await onRequest();

      console.log("keep going");

      if (response.status === 200) {
        const post = response.data;
        console.log(post);

        dispatch(getPosts(post));
        console.log("success");
      } else {
        throw response;
      }
    } catch (e) {
      console.log("Error");
    }
  };

  return {
    fetchPosts,
  };
};
