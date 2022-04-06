import React from "react";
import { useDispatch } from "react-redux";

import { onRequest } from "../Common";
import { getPosts } from "../Redux/Post";

export const useHome = () => {
  const dispatch = useDispatch();
  const fetchPosts = async () => {
    try {
      const response = await onRequest();
      if (response.status === 200) {
        const posts = response.data;
        dispatch(getPosts(posts));
      } else {
        throw response;
      }
    } catch (e) {
      console.log("fail");
    }
  };

  return {
    fetchPosts,
  };
};
