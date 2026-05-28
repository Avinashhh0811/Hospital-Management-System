import { useState } from "react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

import {
    FaUserInjured
} from "react-icons/fa";

function Register() {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");

    const [email, setEmail] = useState("");

    const [phone, setPhone] = useState("");

    const [password, setPassword] = useState("");

    const [age, setAge] = useState("");

    const [gender, setGender] = useState("");

    const [bloodGroup, setBloodGroup] = useState("");

    const [address, setAddress] = useState("");

    const handleRegister = async (e) => {

        e.preventDefault();

        // VALIDATION

        if(
            !fullName ||
            !email ||
            !phone ||
            !password ||
            !age ||
            !gender ||
            !bloodGroup ||
            !address
        ) {

            alert("Please Fill All Fields");

            return;
        }

        // EMAIL VALIDATION

        if(!email.includes("@")) {

            alert("Enter Valid Email");

            return;
        }

        // PHONE VALIDATION

        if(phone.length < 10) {

            alert("Enter Valid Phone Number");

            return;
        }

        // PASSWORD VALIDATION

        if(password.length < 6) {

            alert(
                "Password Must Be Minimum 6 Characters"
            );

            return;
        }

        try {

            await API.post(
                "/auth/register",
                {
                    fullName,
                    email,
                    phone,
                    password,

                    age,
                    gender,
                    bloodGroup,
                    address,

                    role: "ROLE_PATIENT"
                }
            );

            alert("Patient Registered Successfully 😎");

            navigate("/login");

        } catch(error) {

              console.log(error);

              console.log(error.response);

              console.log(error.response.data);

              alert(error.response.data);
          }
    };

    return (

        <div style={{
            minHeight: "100vh",

            background:
            "linear-gradient(135deg,#020617,#0f172a,#1e293b)",

            display: "flex",

            justifyContent: "center",

            alignItems: "center",

            padding: "30px",

            position: "relative",

            overflow: "hidden"
        }}>

            {/* GLOW EFFECTS */}

            <div style={{
                position: "absolute",
                width: "350px",
                height: "350px",
                background: "#2563eb",
                borderRadius: "50%",
                filter: "blur(140px)",
                top: "-100px",
                left: "-100px",
                opacity: "0.4"
            }} />

            <div style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                background: "#16a34a",
                borderRadius: "50%",
                filter: "blur(120px)",
                bottom: "-100px",
                right: "-100px",
                opacity: "0.4"
            }} />

            {/* MAIN FORM */}

            <motion.form

                initial={{
                    opacity: 0,
                    y: 50
                }}

                animate={{
                    opacity: 1,
                    y: 0
                }}

                transition={{
                    duration: 0.8
                }}

                onSubmit={handleRegister}

                style={{
                    width: "100%",
                    maxWidth: "520px",

                    background:
                    "rgba(255,255,255,0.08)",

                    backdropFilter: "blur(15px)",

                    borderRadius: "30px",

                    padding: "45px",

                    boxShadow:
                    "0px 0px 40px rgba(0,0,0,0.4)",

                    zIndex: 10
                }}>

                {/* ICON */}

                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>

                    <motion.div

                        animate={{
                            rotate: [0,5,-5,0]
                        }}

                        transition={{
                            repeat: Infinity,
                            duration: 3
                        }}>

                        <FaUserInjured
                            size={70}
                            color="#4ade80"
                        />

                    </motion.div>

                </div>

                {/* TITLE */}

                <h1 style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "50px",
                    lineHeight: "58px",
                    marginTop: "20px",
                    marginBottom: "35px",
                    fontWeight: "bold"
                }}>

                    Patient <br />

                    Registration

                </h1>

                {/* INPUTS */}

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px"
                }}>

                    <input
                        type="text"
                        placeholder="Full Name"

                        value={fullName}

                        onChange={(e)=>
                            setFullName(e.target.value)}

                        style={inputStyle}
                    />

                    <input
                        type="email"
                        placeholder="Email"

                        value={email}

                        onChange={(e)=>
                            setEmail(e.target.value)}

                        style={inputStyle}
                    />

                    <input
                        type="text"
                        placeholder="Phone"

                        value={phone}

                        onChange={(e)=>
                            setPhone(e.target.value)}

                        style={inputStyle}
                    />

                    <input
                        type="password"
                        placeholder="Password"

                        value={password}

                        onChange={(e)=>
                            setPassword(e.target.value)}

                        style={inputStyle}
                    />

                    <input
                        type="number"
                        placeholder="Age"

                        value={age}

                        onChange={(e)=>
                            setAge(e.target.value)}

                        style={inputStyle}
                    />

                    {/* GENDER */}

                    <select
                        value={gender}

                        onChange={(e)=>
                            setGender(e.target.value)}

                        style={inputStyle}>

                        <option value="">
                            Select Gender
                        </option>

                        <option value="Male">
                            Male
                        </option>

                        <option value="Female">
                            Female
                        </option>

                        <option value="Other">
                            Other
                        </option>

                    </select>

                    {/* BLOOD GROUP */}

                    <input
                        list="bloodGroups"

                        placeholder="Search Blood Group"

                        value={bloodGroup}

                        onChange={(e)=>
                            setBloodGroup(e.target.value)}

                        style={inputStyle}
                    />

                    <datalist id="bloodGroups">

                        <option value="A+" />
                        <option value="A-" />

                        <option value="B+" />
                        <option value="B-" />

                        <option value="AB+" />
                        <option value="AB-" />

                        <option value="O+" />
                        <option value="O-" />

                        <option value="A1+" />
                        <option value="A1-" />

                        <option value="A2+" />
                        <option value="A2-" />

                        <option value="A1B+" />
                        <option value="A1B-" />

                        <option value="A2B+" />
                        <option value="A2B-" />

                        <option value="Bombay Blood Group (hh)" />

                        <option value="Rh-null" />

                    </datalist>

                    {/* ADDRESS */}

                    <textarea
                        placeholder="Address"

                        value={address}

                        onChange={(e)=>
                            setAddress(e.target.value)}

                        rows="3"

                        style={{
                            ...inputStyle,
                            resize: "none"
                        }}
                    />

                    {/* BUTTON */}

                    <motion.button

                        whileHover={{
                            scale: 1.03
                        }}

                        whileTap={{
                            scale: 0.95
                        }}

                        type="submit"

                        style={{
                            padding: "16px",

                            borderRadius: "15px",

                            border: "none",

                            background:
                            "linear-gradient(to right,#16a34a,#4ade80)",

                            color: "white",

                            fontSize: "20px",

                            fontWeight: "bold",

                            cursor: "pointer",

                            marginTop: "10px"
                        }}>

                        Register

                    </motion.button>

                </div>

            </motion.form>

        </div>
    );
}

const inputStyle = {

    padding: "15px",

    borderRadius: "12px",

    border: "1px solid #334155",

    background: "#020617",

    color: "white",

    fontSize: "16px",

    outline: "none"
};

export default Register;