import "./ViewDoctors.css";
import { useEffect, useState } from "react";
import axios from "axios";


function ViewDoctors() {

    const [doctors, setDoctors] = useState([]);

    const [search, setSearch] = useState("");

    const hospitalId = localStorage.getItem("hospitalId");

    useEffect(() => {

        loadDoctors();

    }, []);

    const loadDoctors = async () => {

        try {

            const response = await axios.get(

                `http://localhost:8080/doctor/hospital/${hospitalId}`

            );

            setDoctors(response.data);

        }

        catch(error){

            console.log(error);

        }

    };

    return(

        <div className="viewDoctorContainer">

            <div className="doctorHeader">

                <h1>👨‍⚕️ Doctors</h1>

                <p>
                    Manage Hospital Doctors
                </p>

            </div>

            <input

                className="doctorSearch"

                placeholder="🔍 Search Doctor..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

            />

            <table>

                <thead>

                <tr>

                    <th>ID</th>

                    <th>Name</th>

                    <th>Specialization</th>

                    <th>Experience</th>

                    <th>Fees</th>

                    <th>Status</th>

                    <th>Action</th>

                </tr>

                </thead>

                <tbody>

                {
                    doctors

                        .filter((doctor)=>

                            doctor.doctorName
                                .toLowerCase()
                                .includes(search.toLowerCase())

                            ||

                            doctor.specialization
                                .toLowerCase()
                                .includes(search.toLowerCase())

                        )

                        .map((doctor)=>(

                            <tr key={doctor.doctorId}>

                                <td>{doctor.doctorId}</td>

                                <td>{doctor.doctorName}</td>

                                <td>{doctor.specialization}</td>

                                <td>{doctor.experience} Years</td>

                                <td>₹ {doctor.fees}</td>

                                <td>

                                    <span className="activeBadge">

                                        Active

                                    </span>

                                </td>

                                <td>

                                    <button
                                        className="editBtn"
                                    >

                                        Edit

                                    </button>

                                    <button
                                        className="deleteBtn"
                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                }

                </tbody>

            </table>

        </div>

    );

}

export default ViewDoctors;