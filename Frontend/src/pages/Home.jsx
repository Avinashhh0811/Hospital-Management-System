import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaUserInjured,
  FaHospital,
  FaUserMd,
  FaCalendarCheck,
  FaFileMedical,
  FaHeartbeat,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaChartBar
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* Navbar */}

      <nav className="navbar">
        <div className="logo">
          🏥 HMS
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#portal">Portal</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="help-btn">
          Need Help?
        </button>
      </nav>

      {/* Hero Section */}

      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4>Welcome to</h4>

          <h1>
            Hospital Management System
          </h1>

          <p>
            Smart. Secure. Seamless Healthcare Management.
          </p>
        </motion.div>
      </section>

      {/* Portal Cards */}

      <section id="portal" className="portal-section">

        <div className="portal-grid">

          {/* Patient Login */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="portal patient"
            onClick={() => navigate("/login")}
          >
            <div className="icon-box">
              <FaUserInjured className="icon" />
            </div>

            <h3>Patient Login</h3>

            <p>
              Access your dashboard, book appointments
              and view reports.
            </p>

            <button>
              Login Now →
            </button>
          </motion.div>

          {/* Register */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="portal register"
            onClick={() => navigate("/register")}
          >
            <div className="icon-box">
              <FaHospital className="icon" />
            </div>

            <h3>Patient Registration</h3>

            <p>
              Create your account and get
              started with HMS.
            </p>

            <button>
              Register Now →
            </button>
          </motion.div>

          {/* Admin */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="portal admin"
            onClick={() => navigate("/hospital-portal")}
          >
            <div className="icon-box">
              <FaUserMd className="icon" />
            </div>

           <h3>Hospital Login</h3>

           <p>

             Manage hospitals, doctors,
             appointments and reports.
           </p>

            <button>
              Login Now →
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="portal superadmin"
            onClick={() => navigate("/super-admin-login")}
          >
            <div className="icon-box">
              👑
            </div>

            <h3>Super Admin</h3>

            <p>
              Manage hospitals and control
              the entire HMS platform.
            </p>

            <button>
              Login Now →
            </button>
          </motion.div>

        </div>
      </section>

      {/* Features */}

      <section id="features" className="features">

        <div className="feature-grid">

          <div className="feature-card">
            <FaShieldAlt />
            <div>
              <h3>Secure & Reliable</h3>
              <p>Your data is protected and secure.</p>
            </div>
          </div>

          <div className="feature-card">
            <FaClock />
            <div>
              <h3>24/7 Availability</h3>
              <p>Access healthcare services anytime.</p>
            </div>
          </div>

          <div className="feature-card">
            <FaUsers />
            <div>
              <h3>Expert Doctors</h3>
              <p>Connect with qualified specialists.</p>
            </div>
          </div>

          <div className="feature-card">
            <FaChartBar />
            <div>
              <h3>Smart Management</h3>
              <p>Analytics for better decisions.</p>
            </div>
          </div>

          <div className="feature-card">
            <FaCalendarCheck />
            <div>
              <h3>Appointments</h3>
              <p>Easy appointment scheduling.</p>
            </div>
          </div>

          <div className="feature-card">
            <FaFileMedical />
            <div>
              <h3>Medical Reports</h3>
              <p>Access reports from anywhere.</p>
            </div>
          </div>

          <div className="feature-card">
            <FaHeartbeat />
            <div>
              <h3>Patient Care</h3>
              <p>Improved healthcare experience.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}

      <footer id="contact">
        <h3>Hospital Management System</h3>

        <p>
          Smart Healthcare Platform for Hospitals,
          Patients and Administrators.
        </p>

        <br />

        <p>
          © 2026 All Rights Reserved
        </p>
      </footer>

    </div>
  );
};

export default Home;