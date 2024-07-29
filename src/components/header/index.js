import React from "react";
import "./Header.css";

function Header({user}) {
  return (
    <div className="header">
      <h2>Task Manager</h2>
      {user && <p>Welcome {user} !</p>}
    </div>
  );
}

export default Header;


