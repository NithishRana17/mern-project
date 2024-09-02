import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserList from "./UserList";
import ShowUserList from "./ShowUserList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/showuserlist" element={<ShowUserList />} />
      </Routes>
    </Router>
  );
}

export default App;
