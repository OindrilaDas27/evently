import React from "react";
import { Link } from 'react-router-dom';
import "./signUp.css";
import loginImage from "../../assets/login.png";

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="signup-contents">
        <h2>eventbrite</h2>
        <span className="signup-heading">Create an account</span>
        <div className="signup-form">
          <form>
            <div className="input-container">
              <input
                type="text"
                name="name"
                placeholder="Email address"
                required
              />
            </div>
            <div className="button-container">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
        <h1>or</h1>
        <button className="google">Sign in with Google</button>
        <Link to='/login' className="signup">Log In</Link>
      </div>
      <div className="image">
        <img src={loginImage} />
      </div>
    </div>
  )
}

export default SignUp