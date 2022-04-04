import axios from "axios";
import { useState } from "react";
import GetUsers from "../pages/GetUsers";

function PostUser({
  id,
  username,
  name,
  createUserId,
  createUserName,
  createName,
}) {
  // input을 보여주기 위해 사용됨.
  const [usernameInput, setUserName] = useState("");
  const [nameInput, setName] = useState("");
  const [userIdInput, setUserId] = useState("");

  // state props를 url에 post함.
  async function PostToUsers(id, username, name) {
    await axios.post("http://localhost:8000/users", {
      id,
      username,
      name,
    });
  }

  // input을 보여주기 위해 setState.
  // state props를 업데이트하기 위해 createState. id, username, name이 업데이트 됨.
  const onChangeUserId = (e) => {
    setUserId(e.target.value);
    createUserId(parseInt(e.target.value, 10));
  };

  const onChangeUsername = (e) => {
    setUserName(e.target.value);
    createUserName(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    createName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // 업데이트 된 state props를 PostToUsers()에 파라미터로 전달.
    PostToUsers(id, username, name);

    setUserId("");
    setUserName("");
    setName("");
  };

  return (
    <div>
      <h1>POST</h1>
      <GetUsers title="User List" />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Id which want to Add"
          value={userIdInput}
          onChange={onChangeUserId}
        />
        <input
          type="text"
          value={usernameInput}
          placeholder="Write Your username"
          onChange={onChangeUsername}
        />
        <input
          type="text"
          value={nameInput}
          placeholder="Write Your name"
          onChange={onChangeName}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostUser;
