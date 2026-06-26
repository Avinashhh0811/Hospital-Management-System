import "./ViewHospitals.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



function ViewHospitals() {

    const [search, setSearch] = useState("");
    const [hospitals, setHospitals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        loadHospitals();

    }, []);

    const loadHospitals = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/hospital/all"
            );

            setHospitals(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const deleteHospital = async (id) => {

        const confirmDelete = window.confirm(
            "Delete this hospital?"
        );

        if (!confirmDelete) return;

        try {

            await axios.delete(
                `http://localhost:8080/hospital/delete/${id}`
            );

            alert("Hospital Deleted Successfully");

            loadHospitals();

        } catch (error) {

            console.log(error);

            alert("Delete Failed");

        }

    };

    return (

        <div className="viewHospitalContainer">

            <div className="mainContent">


                  <div className="headerCard">
                      <h1>🏥 Hospitals</h1>
                      <p>Manage All Registered Hospitals</p>
                  </div>


                <input
                    type="text"
                    className="searchBox"
                    placeholder="🔍 Search Hospital..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

              <div className="tableCard">

                  <table className="hospitalTable">

                        <thead>

                        <tr>

                           <th>ID</th>
                           <th>Name</th>
                           <th>City</th>
                           <th>Contact</th>
                           <th>Status</th>
                           <th>Action</th>

                        </tr>

                        </thead>

                        <tbody>

                        {
                            hospitals
                                .filter((hospital) =>

                                    hospital.hospitalName
                                        .toLowerCase()
                                        .includes(search.toLowerCase()) ||

                                    hospital.city
                                        .toLowerCase()
                                        .includes(search.toLowerCase())

                                )

                                .map((hospital) => (

                                    <tr key={hospital.hospitalId}>

                                        {/* Tuze existing td tags ithech rahnar */}

                                        <td>{hospital.hospitalId}</td>

                                        <td>{hospital.hospitalName}</td>

                                        <td>{hospital.city}</td>

                                        <td>{hospital.contactNumber}</td>

                                        <td>

                                            {
                                                hospital.adminCreated ?

                                                    <span className="activeStatus">
                                                        🟢 Active
                                                    </span>

                                                    :

                                                    <span className="pendingStatus">
                                                        🟡 Admin Pending
                                                    </span>

                                            }

                                        </td>

                                        <td>

                                            {
                                                !hospital.adminCreated && (

                                                    <button
                                                        className="createAdminBtn"
                                                        onClick={() => navigate("/create-hospital-admin", {
                                                            state: {
                                                                hospitalId: hospital.hospitalId,
                                                                hospitalName: hospital.hospitalName
                                                            }
                                                        })}
                                                    >
                                                        Create Admin.
                                                    </button>

                                                )
                                            }

                                            <button
                                                className="deleteBtn"
                                                onClick={() => deleteHospital(hospital.hospitalId)}
                                            >
                                                Delete
                                            </button>

                                            <button
                                                className="editBtn"
                                                onClick={() =>
                                                    navigate(
                                                        `/edit-hospital/${hospital.hospitalId}`
                                                    )
                                                }
                                            >
                                                Edit
                                            </button>

                                        </td>

                                    </tr>

                                ))
                        }

                        </tbody>
                    </table>

                </div>

            </div>

        </div>

    );

}

export default ViewHospitals;