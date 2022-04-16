import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHome } from "./useHome";

// function Home() {
//   const { fetchPosts } = useHome();

//   useEffect(() => {
//     fetchPosts();
//   });

//   return (
//     <div>
//       <h1>HomePage</h1>
//       <Link to="/posts">Posts List</Link>
//     </div>
//   );
// }

// export default Home;
const Home = () => {
  const { posts, getPosts } = useHome();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log("posts", posts);

  return (
    <div>
      {posts.map((item) => (
        <li>
          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.body}</div>
        </li>
      ))}
    </div>
  );
};

export default Home;
