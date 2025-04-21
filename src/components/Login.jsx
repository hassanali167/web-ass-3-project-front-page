import React, { useState } from "react";
import "./Auth.css";

function Login() {
  const [loginMessage, setLoginMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "testuser" && password === "password123") {
      setLoginMessage("🎉 Login Successful!");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } else {
      setLoginMessage("❌ Invalid username or password.");
    }
  };

  return (
    <div className="auth-page">
      <div className="welcome">
        <h1>Welcome to Nest Chat 💬</h1>
        <p>Connect with your friends securely and instantly!</p>
      </div>

      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </form>
        <p>{loginMessage}</p>
      </div>
    </div>
  );
}

export default Login;
