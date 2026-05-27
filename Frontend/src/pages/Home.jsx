import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import {
    FaHospital,
    FaUserInjured
} from "react-icons/fa";

function Home() {

    const navigate = useNavigate();

    return (

        <div style={{
            minHeight: "100vh",

            background:
            "linear-gradient(135deg,#020617,#0f172a,#1e293b)",

            display: "flex",

            justifyContent: "center",

            alignItems: "center",

            overflow: "hidden",

            position: "relative"
        }}>

            {/* GLOW EFFECTS */}

            <div style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "#2563eb",
                filter: "blur(150px)",
                top: "-100px",
                left: "-100px",
                opacity: "0.4"
            }} />

            <div style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "#16a34a",
                filter: "blur(120px)",
                bottom: "-100px",
                right: "-100px",
                opacity: "0.4"
            }} />

            {/* CARD */}

            <motion.div

                initial={{
                    opacity: 0,
                    y: 50
                }}

                animate={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    duration: 1
                }}

                style={{
                    width: "90%",
                    maxWidth: "500px",

                    padding: "50px",

                    borderRadius: "30px",

                    background:
                    "rgba(255,255,255,0.08)",

                    backdropFilter: "blur(15px)",

                    boxShadow:
                    "0px 0px 40px rgba(0,0,0,0.4)",

                    textAlign: "center",

                    zIndex: 10
                }}>

                {/* ICON */}

                <motion.div

                    animate={{
                        rotate: [0,5,-5,0]
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 3
                    }}>

                    <FaHospital
                        size={80}
                        color="#38bdf8"
                    />

                </motion.div>

                {/* TITLE */}

                <h1 style={{
                    color: "white",
                    fontSize: "55px",
                    marginTop: "20px",
                    fontWeight: "bold"
                }}>

                    HMS Portal

                </h1>

                <p style={{
                    color: "#cbd5e1",
                    marginTop: "10px",
                    marginBottom: "40px",
                    fontSize: "18px"
                }}>

                    Smart Hospital Management System

                </p>

                {/* LOGIN BUTTON */}

                <motion.button

                    whileHover={{
                        scale: 1.05
                    }}

                    whileTap={{
                        scale: 0.95
                    }}

                    onClick={() =>
                        navigate("/login")}

                    style={{
                        width: "100%",

                        padding: "16px",

                        borderRadius: "15px",

                        border: "none",

                        background:
                        "linear-gradient(to right,#2563eb,#38bdf8)",

                        color: "white",

                        fontSize: "18px",

                        fontWeight: "bold",

                        cursor: "pointer",

                        marginBottom: "20px"
                    }}>

                    Login

                </motion.button>

                {/* REGISTER BUTTON */}

                <motion.button

                    whileHover={{
                        scale: 1.05
                    }}

                    whileTap={{
                        scale: 0.95
                    }}

                    onClick={() =>
                        navigate("/register")}

                    style={{
                        width: "100%",

                        padding: "16px",

                        borderRadius: "15px",

                        border: "none",

                        background:
                        "linear-gradient(to right,#16a34a,#4ade80)",

                        color: "white",

                        fontSize: "18px",

                        fontWeight: "bold",

                        cursor: "pointer"
                    }}>

                    <FaUserInjured
                        style={{
                            marginRight: "10px"
                        }}
                    />

                    Register As Patient

                </motion.button>

            </motion.div>

        </div>
    );
}

export default Home;