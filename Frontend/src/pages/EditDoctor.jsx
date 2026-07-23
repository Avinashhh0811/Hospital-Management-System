import "./EditDoctor.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditDoctor() {

    const { doctorId } = useParams();

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

    useEffect(() => {

        loadDoctor();

    }, []);

    const loadDoctor = async () => {

        try {

            const response = await axios.get(

                `http://localhost:8080/doctor/${doctorId}`

            );

            setDoctor(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setDoctor({

            ...doctor,

            [e.target.name]: e.target.value

        });

    };

    const updateDoctor = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.put(

                `http://localhost:8080/doctor/update/${doctorId}`,

                doctor

            );

            alert(response.data);

            navigate("/view-doctors");

        }

        catch (error) {

            console.log(error);

            alert("Update Failed");

        }

    };

    return (

        <div className="editDoctorContainer">

            <div className="editDoctorCard">

                <h1>✏ Edit Doctor</h1>

                <form onSubmit={updateDoctor}>

                    <input
                        type="text"
                        name="doctorName"
                        placeholder="Doctor Name"
                        value={doctor.doctorName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="specialization"
                        placeholder="Specialization"
                        value={doctor.specialization}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="qualification"
                        placeholder="Qualification"
                        value={doctor.qualification}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="experience"
                        placeholder="Experience"
                        value={doctor.experience}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={doctor.phone}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={doctor.email}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="gender"
                        value={doctor.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>

                    <input
                        type="text"
                        name="opdTiming"
                        placeholder="OPD Timing"
                        value={doctor.opdTiming}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="fees"
                        placeholder="Consultation Fees"
                        value={doctor.fees}
                        onChange={handleChange}
                        required
                    />

                    <div className="buttonGroup">

                        <button
                            type="submit"
                            className="updateBtn"
                        >
                            Update Doctor
                        </button>

                        <button
                            type="button"
                            className="cancelBtn"
                            onClick={() => navigate("/view-doctors")}
                        >
                            Cancel
                        </button>

                    </div>

                    </form>

                    </div>

                    </div>

                    );

                    }

                    export default EditDoctor;