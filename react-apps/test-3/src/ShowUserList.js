import React from "react";
import { useSelector } from "react-redux";

const ShowUserList = () => {
  const users = useSelector((state) => state.user.users);

  return (
    <div>
      <h1>Show User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowUserList;
