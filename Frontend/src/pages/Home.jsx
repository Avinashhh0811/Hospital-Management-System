import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home">

      <div className="overlay">

        <div className="card">

          <h1>🏥 HMS Portal</h1>

          <p>
            Smart Hospital Management System
          </p>

          <button
            className="loginBtn"
            onClick={() => navigate("/login")}
          >
            Patient Login
          </button>

          <button
            className="registerBtn"
            onClick={() => navigate("/register")}
          >
            Patient Registration
          </button>

          <button
            className="adminBtn"
            onClick={() => navigate("/login")}
          >
            Hospital/Admin Login
          </button>

        </div>

      </div>

    </div>
  );
}

export default Home;