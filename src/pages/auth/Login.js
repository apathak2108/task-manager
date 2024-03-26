import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Header from "../../components/Header";
import './Auth.css';

function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
      email: "",
      password: "",
    });
    function handleLoginSubmit(e) {
      e.preventDefault();
      const loggedUser = JSON.parse(localStorage.getItem("user"));
      if (
        credentials.email === loggedUser.email &&
        credentials.password === loggedUser.password
      ) {
        localStorage.setItem("loggedin", true);
        navigate("/home");
      }
      else {
        alert("Wrong Email or Password !!!")
      }
    }
  
    return (
      <>
        <Header />
        <div className="login-container">
          <h3>Login</h3>
          <form onSubmit={handleLoginSubmit}>
            <div className="login-form">
              <input
                type="text"
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
            <Button className="auth-btn" label="Login" />
            <div className="anchor-tag">
              <a href="/register" className="auth-link">
                Go to Register Page
              </a>
            </div>
          </form>
        </div>
      </>
    );
  }
  
  export default Login;