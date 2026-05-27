import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post(
                "/auth/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem(
                "token",
                response.data
            );

            alert("Login Successful");

            navigate("/dashboard");

        } catch(error) {

            console.log(error);

            alert("Invalid Credentials");
        }
    };

    return (

        <div style={{
            minHeight: "100vh",
            background: "#020617",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>

            <form
                onSubmit={handleLogin}
                style={{
                    width: "100%",
                    maxWidth: "400px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    background: "rgba(255,255,255,0.05)",
                    padding: "40px",
                    borderRadius: "20px"
                }}>

                <h1 style={{
                    color: "white",
                    textAlign: "center"
                }}>

                    HMS Login

                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>
                        setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>
                        setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    style={{
                        padding: "15px",
                        background: "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontSize: "18px"
                    }}>

                    Login

                </button>

            </form>

        </div>
    );
}

export default Login;