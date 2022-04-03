import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home page</h1>

      <Link to="/axios">Axios Function</Link>

      {/* <ul>
        <li>
          <Link to="/getusers">GET Users</Link>
        </li>
        <li>
          <Link to="/postuser">POST User</Link>
        </li>
        <li>
          <Link to="/putuser">PUT User</Link>
        </li>
        <li>
          <Link to="/deleteuser">DELETE User</Link>
        </li>
      </ul> */}
    </div>
  );
}

export default Home;
