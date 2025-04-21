import React, { useState } from "react";
import "./Auth.css";

function Signup() {
  const [signupMessage, setSignupMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setSignupMessage("❌ Passwords do not match!");
      return;
    }

    setSignupMessage("🎉 Account Created Successfully!");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1500);
  };

  return (
    <div className="auth-page">
      <div className="welcome">
        <h1>Join Nest Chat 🚀</h1>
        <p>Sign up and start chatting with your friends today!</p>
      </div>

      <div className="auth-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSignup}>
          <input type="text" name="fullName" placeholder="Full Name" required />
          <input type="text" name="username" placeholder="Username" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="/login">Login</a></p>
        </form>
        <p>{signupMessage}</p>
      </div>
    </div>
  );
}

export default Signup;
