import "./EditHospital.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditHospital() {

    const { hospitalId } = useParams();

    const navigate = useNavigate();

    const [hospital, setHospital] = useState({

        hospitalName: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        contactNumber: "",
        email: "",
        website: "",
        registrationNumber: "",
        hospitalType: ""

    });

    useEffect(() => {

        loadHospital();

    }, []);

    const loadHospital = async () => {

        try {

            const response = await axios.get(

                `http://localhost:8080/hospital/${hospitalId}`

            );

            setHospital(response.data);

        } catch (error) {

            console.log(error);

            alert("Failed To Load Hospital");

        }

    };

    const handleChange = (e) => {

        setHospital({

            ...hospital,

            [e.target.name]: e.target.value

        });

    };

    const updateHospital = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.put(

                `http://localhost:8080/hospital/update/${hospitalId}`,

                hospital

            );

           alert("✅ Hospital Updated Successfully");

           navigate("/view-hospitals");

        } catch (error) {

            console.log(error);

            alert("Update Failed");

        }

    };

    return (

        <div className="editHospitalContainer">

            <div className="editCard">

                <div className="editHeader">

                    <h1>🏥 Edit Hospital</h1>

                    <p>Update Hospital Information</p>

                </div>

                <form onSubmit={updateHospital}>

                    <div className="formGrid">

                        <input
                            type="text"
                            name="hospitalName"
                            placeholder="Hospital Name"
                            value={hospital.hospitalName}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="registrationNumber"
                            placeholder="Registration Number"
                            value={hospital.registrationNumber}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="hospitalType"
                            placeholder="Hospital Type"
                            value={hospital.hospitalType}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={hospital.address}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={hospital.city}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            value={hospital.state}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="pincode"
                            placeholder="Pincode"
                            value={hospital.pincode}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="contactNumber"
                            placeholder="Contact Number"
                            value={hospital.contactNumber}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={hospital.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="website"
                            placeholder="Website"
                            value={hospital.website}
                            onChange={handleChange}
                        />

                    </div>

                    <button
                        className="updateBtn"
                        type="submit"
                    >

                        Update Hospital

                    </button>

                    <button
                        className="backBtn"
                        onClick={() => navigate("/view-hospitals")}
                        type="button"
                    >
                        ← Back
                    </button>

                </form>

            </div>

        </div>

    );

}

export default EditHospital;