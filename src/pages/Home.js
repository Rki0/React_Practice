import { Link } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";

import { useHome } from "../pages/useHome";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../Redux/Post";
import { onRequest } from "../Common";

function Home() {
  const { fetchPosts } = useHome();

  useEffect(() => {
    fetchPosts();
  });

  return (
    <div>
      <h1>Home page</h1>

      <Link to="/axios">watch Data</Link>
    </div>
  );
}

export default Home;
