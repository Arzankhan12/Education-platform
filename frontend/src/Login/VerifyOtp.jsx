import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbas";
import Footer from "../Footer/Footer";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {}; // Email from LoginBusiness

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      setMessage("Please enter the OTP.");
      return;
    }

    if (!email) {
      setMessage("Email is missing. Please go back and try again.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      const response = await axios.post("http://localhost:7000/api/verify-otp", {
        email,
        otp,
      });

      if (response.data.isNewUser) {
        // Redirect to registration form
        navigate("/register", { state: { email } });
      } else {
        // Redirect to dashboard
        navigate("/dashboard");
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to verify OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Verify OTP</h1>
          </div>
          <form className="login-form" onSubmit={handleOtpSubmit}>
            <div className="input-container">
              <input
                type="text"
                id="otp"
                className="login-input"
                placeholder=""
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <label htmlFor="otp" className="login-label">
                Enter the OTP sent to your email
              </label>
            </div>
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
          {message && <p className="login-message">{message}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VerifyOtp;
