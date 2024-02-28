import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./componete/User";
import CreateUser from "./componete/CreateUser";
import DeleteUser from "./componete/DeleteUser";
import UpdateUser from "./componete/UpdateUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>
          {/* <Route path='/delete' element={}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
