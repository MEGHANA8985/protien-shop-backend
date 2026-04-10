import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (!email) return alert("Enter email");
    login(email);
    alert("Login successful!");
    navigate("/");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <input
        placeholder="Password"
        type="password"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button
        style={{ width: "100%", padding: "10px", background: "#2874f0", color: "white", border: "none" }}
        onClick={handleLogin}
      >
        Login
      </button>

      <p style={{ marginTop: "10px" }}>
        Don’t have an account?{" "}
        <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/signup")}>
          Sign up
        </span>
      </p>
    </div>
  );
};

export default Login;
