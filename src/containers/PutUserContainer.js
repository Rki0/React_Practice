import { useDispatch, useSelector } from "react-redux";
import { setUserId, setUserName, setName } from "../modules/setAxios";
import PutUser from "../components/PutUser";

function PutUserContainer() {
  const { id, username, name } = useSelector((state) => ({
    id: state.setAxios.id,
    usrename: state.setAxios.username,
    name: state.setAxios.name,
  }));

  const dispatch = useDispatch();

  const createaUserId = (id) => dispatch(setUserId(id));
  const createUserName = (username) => dispatch(setUserName(username));
  const createName = (name) => dispatch(setName(name));

  return (
    <PutUser
      id={id}
      username={username}
      name={name}
      createUserId={createaUserId}
      createUserName={createUserName}
      createName={createName}
    />
  );
}

export default PutUserContainer;
