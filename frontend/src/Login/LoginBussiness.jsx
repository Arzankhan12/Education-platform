import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation to OTP verification
import "./login.css";
import Navbar from "../Navbar/Navbas";
import Footer from "../Footer/Footer";

function LoginBussiness() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    try {
      setLoading(true);
      setMessage(""); // Clear any previous messages
      // Send email to backend
      const response = await axios.post("http://localhost:7000/api/send-otp", {
        email,
      });

      setMessage(response.data.message); // Show success message
      setLoading(false);

      // Navigate to OTP verification page and pass email as state
      navigate("/verify-otp", { state: { email } });
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to send OTP. Please try again."
      );
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">
              <span>Code With Smile</span> business
            </h1>
          </div>
          <br />
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="email"
                id="email"
                className="login-input"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className="login-label">
                Enter your work email address
              </label>
            </div>
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Sending..." : "Continue"}
            </button>
          </form>
          {message && <p className="login-message">{message}</p>}
          <div className="login-footer">
            <p>
              <a href="/help" className="footer-link">
                Need help with logging in or signing up?
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginBussiness;
