import React from "react";
import Header from "../../components/Header";
import "./Auth.css";

function Register() {
  return (
    <div className="register-container">
      <Header />
      <h2>Register</h2>
      <form>
        <div className="register-form">
          <input
            type="text"
            id="name"
            name="name"
            label="Name"
            placeholder="FirstName LastName"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            label="Email"
            placeholder="abc@xyz.com"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            label="Password"
            placeholder="●●●●●●●●"
            required
          />
        </div>
      </form>
    </div>
  );
}

function Login() {
  return (
    <div className="login-container">
      <Header />
      <h2>Login</h2>
      <form>
        <div className="login-form">
          <input
            type="email"
            id="email"
            name="email"
            label="Email"
            placeholder="abc@xyz.com"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            label="Password"
            placeholder="●●●●●●●●"
            required
          />
        </div>
      </form>
    </div>
  );
}

export { Register, Login };
