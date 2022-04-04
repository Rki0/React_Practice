import { NavLink, Outlet } from "react-router-dom";

function AxiosFunction() {
  return (
    <div>
      <h1>Axios Function</h1>
      <Outlet />
      <ul>
        <li>
          <NavLink to="/axios/getusers">GET</NavLink>
        </li>
        <li>
          <NavLink to="/axios/postuser">POST</NavLink>
        </li>
        <li>
          <NavLink to="/axios/putuser">PUT</NavLink>
        </li>
        <li>
          <NavLink to="/axios/deleteuser">DELETE</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AxiosFunction;
