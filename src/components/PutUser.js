import axios from "axios";
import { useState } from "react";
import GetUsers from "../pages/GetUsers";

function PutUser() {
  const [usernameInput, setUserName] = useState("");
  const [nameInput, setName] = useState("");
  const [userIdInput, setUserId] = useState("");

  async function PutToUsers(id, username, name) {
    await axios.put(`http://localhost:8000/users/${id}`, {
      username,
      name,
    });
  }

  const onChangeUserId = (e) => {
    setUserId(parseInt(e.target.value, 10));
  };

  const onChangeUsername = (e) => {
    setUserName(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    PutToUsers(userIdInput, usernameInput, nameInput);

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
          value={userIdInput}
          onChange={onChangeUserId}
        />
        <input
          type="text"
          placeholder="Revise Your username"
          value={usernameInput}
          onChange={onChangeUsername}
        />
        <input
          type="text"
          placeholder="Revise Your name"
          value={nameInput}
          onChange={onChangeName}
        />
        <button type="submit">PUT</button>
      </form>
    </div>
  );
}

export default PutUser;
