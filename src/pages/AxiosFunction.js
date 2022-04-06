import React from "react";

import { useSelector } from "react-redux";

const AxiosFunction = () => {
  const { posts } = useSelector((state) => ({ posts: state.Post.posts }));

  console.log("posts", posts);

  return (
    <div>
      {posts.map((item) => (
        <li key={item.id}>
          {item.id} <span>{item.title}</span>
        </li>
      ))}
    </div>
  );
};

export default AxiosFunction;
