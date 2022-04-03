import axios from "axios";
import { useState } from "react";
import GetUsers from "./GetUsers";

function PutUser() {
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  async function PutData(userId, username, name) {
    await axios.put(`http://localhost:8000/users/${userId}`, {
      username,
      name,
    });
  }

  const changeUserId = (e) => {
    setUserId(parseInt(e.target.value, 10));
  };

  const changeUserName = (e) => {
    setUserName(e.target.value);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    PutData(userId, username, name);

    setUserId("");
    setUserName("");
    setName("");
  };

  return (
    <div>
      <h1>PUT</h1>
      <GetUsers title="User List" />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Id which want to Revise"
          value={userId}
          onChange={changeUserId}
        />
        <input
          type="text"
          placeholder="Revise Your username"
          value={username}
          onChange={changeUserName}
        />
        <input
          type="text"
          placeholder="Revise Your name"
          value={name}
          onChange={changeName}
        />
        <button type="submit">PUT</button>
      </form>
    </div>
  );
}

export default PutUser;
