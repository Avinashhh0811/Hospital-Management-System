import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUserInjured,
  FaHospital,
  FaUserMd
} from "react-icons/fa";

const Home = () => {

  const navigate = useNavigate();

  return (

    <div className="home">

      <div className="overlay">

        <motion.div

          initial={{ opacity:0,y:40 }}
          animate={{ opacity:1,y:0 }}
          transition={{ duration:0.6 }}

          className="home-card"
        >

          <h1>🏥 HMS Portal</h1>

          <p>
            Smart Hospital Management System
          </p>

          <div className="portal-grid">

            <motion.div
              whileHover={{ scale:1.03 }}
              className="portal patient"
              onClick={() => navigate("/login")}
            >

              <FaUserInjured className="icon" />

              <h2>Patient Login</h2>

            </motion.div>

            <motion.div
              whileHover={{ scale:1.03 }}
              className="portal register"
              onClick={() => navigate("/register")}
            >

              <FaHospital className="icon" />

              <h2>Patient Registration</h2>

            </motion.div>

            <motion.div
              whileHover={{ scale:1.03 }}
              className="portal admin"
              onClick={() => navigate("/admin-login")}
            >

              <FaUserMd className="icon" />

              <h2>Hospital/Admin Login</h2>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </div>
  );
};

export default Home;