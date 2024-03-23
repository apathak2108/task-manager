import React from "react";
import "./Button.css";

function Button({ handleAdd }) {
  return (
    <div className="btn">
      <button className="submit-btn" onClick={handleAdd} >
        Add Task
      </button>
    </div>
  );
}

export default Button;
