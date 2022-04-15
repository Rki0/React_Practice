import { useSelector, shallowEqual } from "react-redux";

function ShowPosts() {
  // 이 부분을 createSelector로 바꾸기...?
  // 최적화를 위해서 사용하는거라면 shallowEqual 써도 되는거 아닌가요?
  const { posts } = useSelector(
    (state) => ({ posts: state.post.posts }),
    shallowEqual
  );

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id} : {post.title}
        </li>
      ))}
    </div>
  );
}

export default ShowPosts;
