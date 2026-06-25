import "./AdminLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password
        }
      );

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

     if (
       response.data.role ===
       "ROLE_HOSPITAL_ADMIN"
     ) {
       navigate("/admin-dashboard");
     }

       else {

        alert("Access Denied");
      }

    } catch (error) {

      console.log(error);
      alert("Invalid Credentials");
    }
  };

  return (

    <div className="adminLoginContainer">

      <div className="adminLoginCard">

        <h1>👑 Super Admin Login</h1>

        <p>
          Manage Hospitals & HMS Platform
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;