import React from "react";
import "./Input.css";

function Input({ value, onChange }) {
  return (
    <div className="input">
      <input
        type="text"
        className="input-field"
        placeholder="Enter your task"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
