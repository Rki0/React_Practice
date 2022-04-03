import axios from "axios";

async function getUsersLength() {
  const response = await axios.get("http://localhost:8000/users");

  return response.data.length;
}

export default getUsersLength;
