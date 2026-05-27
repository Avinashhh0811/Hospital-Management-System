import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");

        alert("Logout Successful");

        navigate("/");
    };

    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                gap: "20px"
            }}
        >

            <h1>

                Welcome To HMS Dashboard

            </h1>

            <button
                onClick={handleLogout}
                style={{
                    padding: "12px 20px",
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px"
                }}
            >

                Logout

            </button>

        </div>
    );
}

export default Dashboard;