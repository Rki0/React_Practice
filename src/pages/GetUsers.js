import axios from "axios";
import useAsync from "../useAsync";

async function getUsers() {
  const response = await axios.get("http://localhost:8000/users");

  return response.data;
}

function GetUsers(props) {
  const [state, fetchUsers] = useAsync(getUsers, [], false);

  const { loading, data: users, error } = state;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!!!</div>;
  if (!users) return <button onClick={fetchUsers}>Show me Users</button>;

  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} : {user.username} ({user.name})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetUsers;
