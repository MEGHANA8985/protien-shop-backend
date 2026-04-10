import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const handleSignup = () => {
    if (!email) return alert("Enter email");
    login(email);
    alert("Account created & logged in!");
    navigate("/");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "auto" }}>
      <h2>Sign Up</h2>

      <input
        placeholder="Name"
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

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
        style={{ width: "100%", padding: "10px", background: "green", color: "white", border: "none" }}
        onClick={handleSignup}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
