import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("role", response.data.role);

      alert("Login Successful 😎");
      navigate("/dashboard");

    } catch (error) {

      console.log(error);
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="loginPage">

      <div className="leftPanel">

        <div className="brandLogo">
          🏥 HMS
        </div>

        <h1>
          Smart. Secure.
          <br />
          Seamless Healthcare.
        </h1>

        <p>
          Streamline operations, enhance patient care,
          and manage your hospital with confidence.
        </p>

        <div className="feature">
          🔒 Secure & Reliable
        </div>

        <div className="feature">
          📊 Real-time Insights
        </div>

        <div className="feature">
          👨‍⚕️ Better Patient Care
        </div>

      </div>

      <div className="loginCard">

        <div className="loginHeader">
          <h4>🏥 HMS Portal</h4>
          <h1>Welcome Back</h1>
          <p>
            Smart. Secure. Seamless Healthcare Access.
          </p>
        </div>

        <div className="inputGroup">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div className="inputGroup">

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </div>

        <div className="loginOptions">

          <p
            className="forgotText"
            onClick={() =>
              navigate("/forgot-password")
            }
          >
            Forgot Password?
          </p>

        </div>

        <button
          className="loginBtn"
          onClick={handleLogin}
        >
          Access Dashboard
        </button>

        <div className="bottomText">

          New User?

          <span
            onClick={() =>
              navigate("/register")
            }
          >
            Register Here
          </span>

        </div>

      </div>

    </div>
  );
}

export default Login;