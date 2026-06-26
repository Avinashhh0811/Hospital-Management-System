import "./AddDoctor.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddDoctor() {

    const navigate = useNavigate();

    const [doctor, setDoctor] = useState({

        doctorName: "",

        specialization: "",

        qualification: "",

        experience: "",

        phone: "",

        email: "",

        gender: "",

        opdTiming: "",

        fees: "",

        hospitalId: localStorage.getItem("hospitalId")

    });

    const handleChange = (e) => {

        setDoctor({

            ...doctor,

            [e.target.name]: e.target.value

        });

    };

    const saveDoctor = async (e) => {

        e.preventDefault();

        try{

            const response = await axios.post(

                "http://localhost:8080/doctor/add",

                doctor

            );

            alert(response.data);

            navigate("/view-doctors");

        }

        catch(error){

            console.log(error);

            alert("Failed To Add Doctor");

        }

    };

    return(

        <div className="addDoctorContainer">

            <div className="doctorCard">

                <h1>

                    👨‍⚕️ Add Doctor

                </h1>

                <form onSubmit={saveDoctor}>

                    <input
                        type="text"
                        name="doctorName"
                        placeholder="Doctor Name"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="specialization"
                        placeholder="Specialization"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="qualification"
                        placeholder="Qualification"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="experience"
                        placeholder="Experience"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="gender"
                        onChange={handleChange}
                    >

                        <option>

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

                        <input
                            type="text"
                            name="opdTiming"
                            placeholder="OPD Timing (9 AM - 1 PM)"
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="number"
                            name="fees"
                            placeholder="Consultation Fees"
                            onChange={handleChange}
                            required
                        />

                        <div className="buttonGroup">

                            <button
                                type="submit"
                                className="saveBtn"
                            >

                                Add Doctor

                            </button>

                            <button
                                type="button"
                                className="cancelBtn"
                                onClick={() => navigate("/admin-dashboard")}
                            >

                                Cancel

                            </button>

                        </div>

                        </form>

                        </div>

                        </div>

                        );

                        }

                        export default AddDoctor;

