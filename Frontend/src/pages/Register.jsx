import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  // 1. Consolidated Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    bloodGroup: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  // OTP and UI States
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);

  // Timer Effect
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Unified Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* SEND OTP */
  const sendOtp = async () => {
    const { fullName, email, phone, age, gender, bloodGroup, address, password, confirmPassword } = formData;

    // Validation
    if (!fullName.trim()) return alert("Full Name is required");
    if (!email.trim()) return alert("Email is required");
    if (!phone.trim()) return alert("Phone Number is required");
    if (!/^[0-9]{10}$/.test(phone)) return alert("Enter valid 10 digit phone number");
    if (!age) return alert("Age is required");
    if (age < 1 || age > 120) return alert("Enter valid age");
    if (!gender) return alert("Gender is required");
    if (!bloodGroup) return alert("Blood Group is required");
    if (!address.trim()) return alert("Address is required");
    if (!password.trim()) return alert("Password is required");
    if (password.length < 6) return alert("Password must be at least 6 characters");
    if (password !== confirmPassword) return alert("Passwords do not match ❌");

    setLoading(true);
    try {
      await axios.post("http://localhost:8080/api/auth/send-otp", {
        email: email,
      });

      alert("OTP Sent Successfully 📩");
      setOtpSent(true);
      setTimer(30);
    } catch (error) {
      console.log(error);
      alert("Failed To Send OTP ❌");
    } finally {
      setLoading(false);
    }
  };

  /* REGISTER */
  const handleRegister = async () => {
    if (!otp.trim()) {
      alert("Please Enter OTP");
      return;
    }

    setVerifying(true);
    try {
      const response = await axios.post("http://localhost:8080/api/auth/verify-register", {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        age: formData.age,
        gender: formData.gender,
        bloodGroup: formData.bloodGroup,
        address: formData.address,
        password: formData.password,
        role: "ROLE_PATIENT",
        otp: otp,
      });

      if (response.data === "Registration Successful") {
        alert("Registration Successful ✅");
        navigate("/login");
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data || "Registration Failed ❌");
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="loginPage">
      <div className="bgAnimation"></div>

      <div className="loginContainer">
        <div className="registerCard">
          <h1>Create Account</h1>
          <p>HMS Registration Portal</p>

          {!otpSent ? (
            <>
              <div className="formGrid">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                />

                {/* GENDER */}
                <div className="selectWrapper">
                  <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* BLOOD GROUP */}
                <div className="selectWrapper">
                  <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>

                {/* ADDRESS & PASSWORDS - Utilizing the fullWidth CSS class */}
                <textarea
                  className="fullWidth"
                  name="address"
                  placeholder="Enter Address"
                  value={formData.address}
                  onChange={handleChange}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <button onClick={sendOtp} disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending OTP...
                  </>
                ) : (
                  "Send OTP"
                )}
              </button>
            </>
          ) : (
            <div className="otpContainer">
              <h2>Verify OTP</h2>
              <p>OTP sent to your email</p>

              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />

              <button onClick={handleRegister} disabled={verifying}>
                {verifying ? (
                  <>
                    <span className="spinner"></span>
                    Verifying...
                  </>
                ) : (
                  "Verify & Register"
                )}
              </button>

              {timer > 0 ? (
                <p style={{ marginTop: "15px", color: "#64748b" }}>
                  Resend OTP in {timer}s
                </p>
              ) : (
                <button
                  onClick={sendOtp}
                  disabled={loading}
                  style={{
                    marginTop: "15px",
                    background: "transparent",
                    border: "none",
                    color: "#2563eb",
                    cursor: "pointer",
                    height: "auto",
                    fontWeight: "600"
                  }}
                >
                  {loading ? "Sending..." : "Resend OTP"}
                </button>
              )}
            </div>
          )}

          <div className="registerText">
            Already Have Account?
            <span onClick={() => navigate("/login")}>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;