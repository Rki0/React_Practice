import axios from "axios";
import { useState } from "react";

function PostUser() {
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  async function PostToUsers(username, name) {
    await axios.post("http://localhost:8000/users", {
      id: userId,
      username,
      name,
    });
  }

  const changeUserId = (e) => {
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

    PostToUsers(username, name);

    setUserId("");
    setUserName("");
    setName("");
  };

  return (
    <div>
      <h1>POST</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Id which want to Add"
          value={userId}
          onChange={changeUserId}
        />
        <input
          type="text"
          value={username}
          placeholder="Write Your username"
          onChange={onChangeUsername}
        />
        <input
          type="text"
          value={name}
          placeholder="Write Your name"
          onChange={onChangeName}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostUser;
