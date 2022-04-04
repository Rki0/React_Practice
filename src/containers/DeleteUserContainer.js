import DeleteUser from "../components/DeleteUser";
import axios from "axios";

function DeleteUserContainer() {
  // async function DeleteData(userId) {
  //   await axios.delete(`http://localhost:8000/users/${userId}`, {
  //     id: userId,
  //   });
  // }

  return <DeleteUser />;
}

export default DeleteUserContainer;
