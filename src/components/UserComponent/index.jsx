import React from "react";
import "./style.css";

const User = () => {
  let user = localStorage.getItem("user");

  return user ? (
    <span className="user badge p-3 w-100">
      <h6>Welcome, {user}</h6>
    </span>
  ) : null;
};

export default User;
