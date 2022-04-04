import { useDispatch, useSelector } from "react-redux";
import { setUserId, setName, setUserName } from "../modules/setAxios";
import {
  setUsernameInput,
  setNameInput,
  setUserIdInput,
} from "../modules/useStateForInput";
import PostUser from "../components/PostUser";

function PostUserContainer() {
  const { id, username, name } = useSelector((state) => ({
    id: state.setAxios.id,
    username: state.setAxios.username,
    name: state.setAxios.name,
  }));

  const dispatch = useDispatch();

  const createaUserId = (id) => dispatch(setUserId(id));
  const createUserName = (username) => dispatch(setUserName(username));
  const createName = (name) => dispatch(setName(name));

  // const onsetUserIdInput = (idInput) => dispatch(setUserIdInput(idInput));
  // const onsetUserNameInput = (usernameInput) =>
  //   dispatch(setUsernameInput(usernameInput));
  // const onsetNameInput = (nameInput) => dispatch(setNameInput(nameInput));

  return (
    <PostUser
      id={id}
      username={username}
      name={name}
      createUserId={createaUserId}
      createUserName={createUserName}
      createName={createName}
      // idInput={idInput}
      // usernameInput={usernameInput}
      // nameInput={nameInput}
      // onsetUserIdInput={onsetUserIdInput}
      // onsetUserNameInput={onsetUserNameInput}
      // onsetNameInput={onsetNameInput}
    />
  );
}

export default PostUserContainer;
