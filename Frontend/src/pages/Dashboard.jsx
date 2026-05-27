import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/login");
    };

    return (

        <div style={{
            minHeight: "100vh",
            background: "#020617",
            color: "white",
            padding: "40px"
        }}>

            <h1 style={{
                textAlign: "center",
                marginBottom: "50px"
            }}>

                HMS Dashboard 🏥

            </h1>

            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap"
            }}>

                <button
                    onClick={() => navigate("/patients")}
                    style={cardStyle}>

                    Patients

                </button>

                <button
                    onClick={() => navigate("/doctors")}
                    style={cardStyle}>

                    Doctors

                </button>

                <button
                    onClick={() => navigate("/appointments")}
                    style={cardStyle}>

                    Appointments

                </button>

                <button
                    onClick={handleLogout}
                    style={{
                        ...cardStyle,
                        background: "red"
                    }}>

                    Logout

                </button>

            </div>

        </div>
    );
}

const cardStyle = {

    width: "200px",
    height: "120px",
    border: "none",
    borderRadius: "15px",
    background: "#2563eb",
    color: "white",
    fontSize: "20px",
    cursor: "pointer"
};

export default Dashboard;