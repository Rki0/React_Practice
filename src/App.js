import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./Layout/Header";
import AxiosFunction from "./pages/AxiosFunction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />

        <Route path="/axios" element={<AxiosFunction />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
