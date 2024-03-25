import React from "react";
import "./Button.css";

function Button({ className, label, onClick }) {
  return (
    <div className="main-btn">
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export default Button;
