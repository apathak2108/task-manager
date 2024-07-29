import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Header from "../../components/header";
import './Auth.css';

function Register() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleRegisterSubmit(e) {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(credentials));
    navigate("/login");
  }
  return (
    <>
      <Header />
      <div className="register-container">
        <h3>Register</h3>
        <form onSubmit={handleRegisterSubmit}>
          <div className="register-form">
            <input
              type="name"
              id="name"
              name="name"
              label="Name"
              placeholder="FirstName LastName"
              value={credentials.name}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder="abc@xyz.com"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              label="Password"
              placeholder="●●●●●●●●"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  [e.target.name]: e.target.value,
                })
              }
              required
            />
          </div>
          <Button className="auth-btn" label="Register" />
          <div className="anchor-tag">
            <a href="/login" className="auth-link">
              Go to Login Page
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
