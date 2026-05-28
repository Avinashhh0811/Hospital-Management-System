import "./Login.css";

import axios from "axios";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {

    try {

      const response =
        await axios.post(
          "http://localhost:8080/api/auth/login",
          {
            email,
            password
          }
        );

      console.log(response.data);

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "email",
        response.data.email
      );

      localStorage.setItem(
        "role",
        response.data.role
      );

      alert(
        "Login Successful 😎"
      );

      navigate("/dashboard");

    }

    catch(error){

      console.log(error);

      alert(
        "Invalid Credentials ❌"
      );
    }
  };

  return (

    <div className="loginPage">

      <div className="bgAnimation"></div>

      <div className="loginContainer">

        <div className="loginCard">

          <h1>
            HMS Portal
          </h1>

          <p>
            Smart Hospital Management System
          </p>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>
              setPassword(e.target.value)
            }
          />

          <button
            onClick={handleLogin}
          >
            Login
          </button>

          <p
            className="forgotText"
            onClick={()=>
              navigate("/forgot-password")
            }
          >
            Forgot Password?
          </p>

          <p className="registerText">

            New User?

            <span
              onClick={()=>
                navigate("/register")
              }
            >
              {" "}
              Register Here
            </span>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;