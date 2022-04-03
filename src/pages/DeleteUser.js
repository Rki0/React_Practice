import axios from "axios";
import { useState } from "react";
import GetUsers from "./GetUsers";

function DeleteUser() {
  const [userId, setUserId] = useState("");

  async function DeleteData(userId) {
    await axios.delete(`http://localhost:8000/users/${userId}`, {
      id: userId,
    });
  }

  const changeUserId = (e) => {
    setUserId(parseInt(e.target.value, 10));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    DeleteData(userId);

    setUserId("");
  };

  return (
    <div>
      <h1>DELETE</h1>
      <GetUsers title="User List" />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Id which want to Delete"
          value={userId}
          onChange={changeUserId}
        />
        <button type="submit">DELETE</button>
      </form>
    </div>
  );
}

export default DeleteUser;
