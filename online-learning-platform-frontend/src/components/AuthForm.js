import React, { useState } from "react";
import axios from "axios";
import '../App.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleAuth = async () => {
    try {
      const endpoint = isLogin ? "login" : "register";
      const response = await axios.post(`http://localhost:5000/api/auth/${endpoint}`, {
        email,
        password,
      });

      if (isLogin) {
        alert("Login successful!");
        localStorage.setItem("token", response.data.token);
      } else {
        alert("Registered successfully!");
      }

      setEmail("");
      setPassword("");
    } catch (err) {
      alert(isLogin ? "Login failed!" : "Registration failed!");
    }
  };

  return (
    <div className="auth-wrapper">
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <div style={{ position: "relative", width: "90%", margin: "0 auto" }}>
        <input
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
  />
  <span onClick={() => setShowPassword(!showPassword)}>
    {showPassword ? "🙈" : "👁️"}
  </span>

              <button onClick={handleAuth}>
        {isLogin ? "Login" : "Register"}
      </button>

          <p style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span
          onClick={() => setIsLogin(!isLogin)}
          style={{ color: "#667eea", cursor: "pointer", fontWeight: "bold" }}
        >
          {isLogin ? "Register" : "Login"}
        </span>
      </p>
      </div>
     </div>
    </div>
  );
};

export default AuthForm;
