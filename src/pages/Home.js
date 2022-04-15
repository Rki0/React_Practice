import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHome } from "./useHome";

function Home() {
  const { fetchPosts } = useHome();

  useEffect(() => {
    fetchPosts();
  });

  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/posts">Posts List</Link>
    </div>
  );
}

export default Home;
