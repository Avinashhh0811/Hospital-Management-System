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

        "http://localhost:8080/auth/login",

        {
          email: email,
          password: password
        }

      );

      console.log(response.data);

      alert("Login Successful 😎");

      localStorage.setItem(
        "token",
        response.data
      );

      navigate("/dashboard");

    }

    catch(error){

      console.log(error);

      alert("Invalid Credentials ❌");
    }
  };

  return (

    <div className="loginPage">

      <div className="bgAnimation"></div>

      <div className="loginContainer">

        <div className="loginCard">

          <h1>HMS Portal</h1>

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

          <button onClick={handleLogin}>
            Login
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;