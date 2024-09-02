import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./actions/userActions";
import { Link } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>User List Page</h1>
      <Link to="/showuserlist">Show User List</Link>
    </div>
  );
};

export default UserList;
