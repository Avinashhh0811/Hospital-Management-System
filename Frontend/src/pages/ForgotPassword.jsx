import "./ForgotPassword.css";

import axios from "axios";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [otp, setOtp] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [otpSent, setOtpSent] = useState(false);

  // SEND OTP

  const sendOtp = async () => {

    try {

      await axios.post(
        "http://localhost:8080/api/auth/forgot-password/send-otp",
        {
          email: email
        }
      );

      alert("OTP Sent Successfully 📩");

      setOtpSent(true);

    } catch (error) {

      console.log(error);

      alert("Failed To Send OTP ❌");
    }
  };

  // RESET PASSWORD

  const resetPassword = async () => {

    try {

      await axios.post(
        "http://localhost:8080/api/auth/reset-password",
        {
          email: email,
          otp: otp,
          newPassword: newPassword
        }
      );

      alert("Password Reset Successful ✅");

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Invalid OTP ❌");
    }
  };

  return (

    <div className="forgotPage">

      <div className="forgotCard">

        <h1>Forgot Password</h1>

        <p>
          Reset your HMS account password
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        {
          !otpSent ?

          <button onClick={sendOtp}>
            Send OTP
          </button>

          :

          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e)=>
                setOtp(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e)=>
                setNewPassword(e.target.value)
              }
            />

            <button onClick={resetPassword}>
              Reset Password
            </button>
          </>
        }

      </div>

    </div>
  );
}

export default ForgotPassword;