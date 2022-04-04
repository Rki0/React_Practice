import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GetUsers from "./pages/GetUsers";
import PostUserContainer from "./containers/PostUserContainer";
import PutUserContainer from "./containers/PutUserContainer";
import DeleteUserContainer from "./containers/DeleteUserContainer";
import Header from "./Layout/Header";
import AxiosFunction from "./pages/AxiosFunction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />

        <Route path="/axios" element={<AxiosFunction />}>
          <Route path="/axios/getusers" element={<GetUsers title="GET" />} />
          <Route path="/axios/postuser" element={<PostUserContainer />} />
          <Route path="/axios/putuser" element={<PutUserContainer />} />
          <Route path="/axios/deleteuser" element={<DeleteUserContainer />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
