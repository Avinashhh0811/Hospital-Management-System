import { useNavigate } from "react-router-dom";

import "../styles/LandingPage.css";

function LandingPage() {

  const navigate = useNavigate();

  return (
    <div className="landing-page">

      {/* ================= HEADER ================= */}

      <header className="landing-header">

        <div className="landing-logo">

          <div className="landing-logo-icon">
            🏥
          </div>

          <div>
            <h2>HMS</h2>

            <span>
              Hospital Management System
            </span>
          </div>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <main className="landing-main">

        <div className="landing-hero">

          <span className="landing-badge">
            Healthcare Management Platform
          </span>

          <h1>
            Manage Healthcare
            <br />
            <span>Simply & Securely</span>
          </h1>

          <p>
            A simple digital platform connecting
            hospitals and patients in one place.
          </p>

        </div>


        {/* ================= PORTALS ================= */}

        <div className="portal-container">

          {/* HOSPITAL */}

          <div className="portal-card">

            <div className="portal-icon hospital-icon">
              🏥
            </div>

            <h2>
              Hospital Portal
            </h2>

            <p>
              Manage hospital operations,
              patients, appointments and reports.
            </p>

            <button
              className="portal-button hospital-button"
              onClick={() =>
                navigate("/hospital/login")
              }
            >
              Continue as Hospital
              <span>→</span>
            </button>

          </div>


          {/* PATIENT */}

          <div className="portal-card">

            <div className="portal-icon patient-icon">
              👤
            </div>

            <h2>
              Patient Portal
            </h2>

            <p>
              Book appointments, view reports
              and manage your healthcare information.
            </p>

            <button
              className="portal-button patient-button"
              onClick={() =>
                navigate("/patient/login")
              }
            >
              Continue as Patient
              <span>→</span>
            </button>

          </div>

        </div>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="landing-footer">

        <span>
          © 2026 Hospital Management System
        </span>

        <span>
          Secure • Simple • Connected
        </span>

      </footer>

    </div>
  );
}

export default LandingPage;