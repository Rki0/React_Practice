import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GetUsers from "./pages/GetUsers";
import PostUser from "./pages/PostUser";
import PutUser from "./pages/PutUser";
import DeleteUser from "./pages/DeleteUser";
import Header from "./Header";
import AxiosFunction from "./AxiosFunction";

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />

        <Route path="/axios" element={<AxiosFunction />}>
          <Route path="/axios/getusers" element={<GetUsers title="GET" />} />
          <Route path="/axios/postuser" element={<PostUser />} />
          <Route path="/axios/putuser" element={<PutUser />} />
          <Route path="/axios/deleteuser" element={<DeleteUser />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
