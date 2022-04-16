import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onRequest } from "../common/axios";
// import { getPosts } from "../Redux/Post";
import { getPosts } from "../Redux/Post";

import { fetchPosts } from "../Redux/Post";

export const useHome = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  const getPosts = useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return {
    posts,
    getPosts,
  };
};
