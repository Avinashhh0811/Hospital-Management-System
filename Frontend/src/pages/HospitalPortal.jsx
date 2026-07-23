import "./HospitalPortal.css";
import { useNavigate } from "react-router-dom";

function HospitalPortal() {

    const navigate = useNavigate();

    return (

        <div className="portalContainer">

            <div className="portalCard">

                <h1>🏥 Hospital Portal</h1>

                <p>

                    Select your login type

                </p>

                <div
                    className="portalBox"
                    onClick={() => navigate("/admin-login")}
                >

                    <h2>👨‍💼</h2>

                    <h3>Hospital Admin</h3>

                    <button>

                        Login

                    </button>

                </div>

                <div
                    className="portalBox"
                    onClick={() => navigate("/reception-login")}
                >

                    <h2>🧑‍💼</h2>

                    <h3>Receptionist</h3>

                    <button>

                        Login

                    </button>

                </div>

            </div>

        </div>

    );

}

export default HospitalPortal;