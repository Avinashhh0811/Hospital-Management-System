import "./Dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SuperAdminDashboard() {

  const navigate = useNavigate();
  const [hospitalCount, setHospitalCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);

  const [recentHospitals, setRecentHospitals] = useState([]);

  useEffect(() => {

    loadDashboardData();

  }, []);

  const loadDashboardData = async () => {

    try {

      const hospitalRes = await axios.get(
        "http://localhost:8080/hospital/all"
      );

      setHospitalCount(
        hospitalRes.data.length
      );

      setRecentHospitals(
        hospitalRes.data
      );

      const doctorRes = await axios.get(
        "http://localhost:8080/doctor/all"
      );

      setDoctorCount(
        doctorRes.data.length
      );

      const patientRes = await axios.get(
        "http://localhost:8080/patient/all"
      );

      setPatientCount(
        patientRes.data.length
      );

      const appointmentRes = await axios.get(
        "http://localhost:8080/appointment/all"
      );

      setAppointmentCount(
        appointmentRes.data.length
      );

    } catch (error) {

      console.error(error);

    }
  };

  return (

    <div className="dashboard">

      <div className="mainContent">

        <div
          className="welcomeCard"
          style={{
            background:
              "linear-gradient(135deg,#4f46e5,#7c3aed)"
          }}
        >

          <div className="welcomeBadge">
            SUPER ADMIN PANEL
          </div>

          <h1>Welcome Avinash 👑</h1>

          <p>
            Manage Hospitals, Doctors & Entire HMS Network
          </p>

        </div>

        {/* Stats */}

        <div className="statsGrid">

          <div className="statCard">
            <h3>Total Hospitals</h3>
            <h2>{hospitalCount}</h2>
          </div>

          <div className="statCard">
            <h3>Total Doctors</h3>
            <h2>{doctorCount}</h2>
          </div>

          <div className="statCard">
            <h3>Total Patients</h3>
            <h2>{patientCount}</h2>
          </div>

          <div className="statCard">
            <h3>Appointments</h3>
            <h2>{appointmentCount}</h2>
          </div>

        </div>

        {/* Quick Actions */}

        <div className="quickSection">

          <h2>Quick Actions</h2>

          <br />

          <div className="actionGrid">

            <div className="actionCard">
              🏥 Add Hospital
            </div>

           <div
               className="actionCard"
               onClick={() => navigate("/view-hospitals")}
           >
               📋 View Hospitals
           </div>

            <div className="actionCard">
              ❌ Delete Hospital
            </div>

          </div>

        </div>

        {/* Recent Hospitals */}

        <div
          className="quickSection"
          style={{ marginTop: "25px" }}
        >

          <h2>Recent Hospitals</h2>

          <br />

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse"
            }}
          >

            <thead>

              <tr>

                <th
                  style={{
                    textAlign: "left",
                    padding: "12px"
                  }}
                >
                  ID
                </th>

                <th
                  style={{
                    textAlign: "left",
                    padding: "12px"
                  }}
                >
                  Hospital Name
                </th>

                <th
                  style={{
                    textAlign: "left",
                    padding: "12px"
                  }}
                >
                  City
                </th>

                <th
                  style={{
                    textAlign: "left",
                    padding: "12px"
                  }}
                >
                  Contact
                </th>

              </tr>

            </thead>

            <tbody>

              {
                recentHospitals.map((hospital) => (

                  <tr
                    key={hospital.hospitalId}
                  >

                    <td
                      style={{
                        padding: "12px"
                      }}
                    >
                      {hospital.hospitalId}
                    </td>

                    <td
                      style={{
                        padding: "12px"
                      }}
                    >
                      {hospital.hospitalName}
                    </td>

                    <td
                      style={{
                        padding: "12px"
                      }}
                    >
                      {hospital.city}
                    </td>

                    <td
                      style={{
                        padding: "12px"
                      }}
                    >
                      {hospital.contactNumber}
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

export default SuperAdminDashboard;