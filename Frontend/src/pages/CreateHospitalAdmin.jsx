import "./CreateHospitalAdmin.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CreateHospitalAdmin() {

    const navigate = useNavigate();

    const location = useLocation();

    const { hospitalId, hospitalName } =
        location.state || {};

    const [admin, setAdmin] = useState({

        email: "",

        password: "",

        hospitalId: hospitalId

    });

    const handleChange = (e) => {

        setAdmin({

            ...admin,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(

                "http://localhost:8080/api/admin/create-hospital-admin",

                admin

            );

            alert(response.data);

            navigate("/view-hospitals");

        }

        catch (error) {

            console.log(error);

            alert("Failed To Create Hospital Admin");

        }

    };

    return (

        <div className="createAdminContainer">

            <div className="createAdminCard">

                <h1>👨‍💼 Create Hospital Admin</h1>

                <p>

                    Create login credentials for the
                    newly added hospital.

                </p>

                <form onSubmit={handleSubmit}>

                    <label>

                        Hospital

                    </label>

                    <input

                        type="text"

                        value={hospitalName || ""}

                        readOnly

                    />

                    <label>

                        Email

                    </label>

                    <input

                        type="email"

                        name="email"

                        placeholder="Enter Email"

                        value={admin.email}

                        onChange={handleChange}

                        required

                    />

                    <label>

                        Password

                    </label>

                    <input

                        type="password"

                        name="password"

                        placeholder="Enter Password"

                        value={admin.password}

                        onChange={handleChange}

                        required

                    />

                    <button type="submit">

                        Create Hospital Admin

                    </button>

                </form>

            </div>

        </div>

    );

}

export default CreateHospitalAdmin;