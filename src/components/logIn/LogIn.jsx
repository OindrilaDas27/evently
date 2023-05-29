import React from "react";
import { Link } from 'react-router-dom';
import "./Login.css";
import loginImage from "../../assets/login.png";

const LogIn = () => {
  return (
    <div className="login-page">
      <div className="login-contents">
        <h2>eventbrite</h2>
        <span className="login-heading">Log in</span>
        <div className="login-form">
          <form>
            <div className="input-container">
              <input
                type="text"
                name="name"
                placeholder="Email address"
                required
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                name="pass"
                placeholder="Password"
                required
              />
            </div>
            <div className="button-container">
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
        <h1>or</h1>
        <button className="google">Sign in with Google</button>
        <Link to='/signup' className="signup">Sign up</Link>
      </div>
      <div className="image">
        <img src={loginImage} />
      </div>
    </div>
  );
};

export default LogIn;
