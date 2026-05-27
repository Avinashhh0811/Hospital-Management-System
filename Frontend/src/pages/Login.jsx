import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api.js";

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

            console.log(response.data);

            localStorage.setItem(
                "token",
                response.data
            );

            alert("Login Successful");

            navigate("/dashboard");

        } catch(error) {

            console.log(error);

            alert("Login Failed");
        }
    };

    return (

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f2f2f2"
        }}>

            <form
                onSubmit={handleLogin}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "320px",
                    gap: "15px",
                    padding: "30px",
                    background: "white",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 10px gray"
                }}>

                <h1
                    style={{
                        textAlign: "center"
                    }}>
                    HMS Login
                </h1>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e)=>
                        setEmail(e.target.value)}
                    style={{
                        padding: "10px",
                        fontSize: "16px"
                    }}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e)=>
                        setPassword(e.target.value)}
                    style={{
                        padding: "10px",
                        fontSize: "16px"
                    }}
                />

                <button
                    type="submit"
                    style={{
                        padding: "12px",
                        background: "blue",
                        color: "white",
                        border: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                        borderRadius: "5px"
                    }}>

                    Login

                </button>

            </form>

        </div>
    );
}

export default Login;