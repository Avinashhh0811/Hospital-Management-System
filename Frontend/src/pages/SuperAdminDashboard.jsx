import "./SuperAdminDashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SuperAdminDashboard() {

  const navigate = useNavigate();
  const [hospitalCount, setHospitalCount] = useState(0);
  const [adminCount, setAdminCount] = useState(0);

  const [recentHospitals, setRecentHospitals] = useState([]);

  useEffect(() => {

    loadDashboardData();

  }, []);

  const loadDashboardData = async () => {

      try {

          const hospitalRes = await axios.get(
              "http://localhost:8080/hospital/all"
          );

          setHospitalCount(hospitalRes.data.length);
          setRecentHospitals(hospitalRes.data);

      } catch (e) {

          console.log("Hospital Error", e);

      }
      try {

          const adminRes = await axios.get(
              "http://localhost:8080/api/admin/all-hospital-admins"
          );

          setAdminCount(adminRes.data.length);

      } catch (e) {

          console.log("Admin Error", e);

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
            Manage Hospitals & Hospital Admins Across HMS Network
          </p>

        </div>

        {/* Stats */}


          <div className="statsGrid">
              <div className="statCard">
                  <h3>Total Hospitals</h3>
                  <h2>{hospitalCount}</h2>
              </div>

              <div className="statCard">
                  <h3>Hospital Admins</h3>
                  <h2>{adminCount}</h2>
              </div>

          </div>





        {/* Quick Actions */}

        <div className="quickSection">

          <h2>Quick Actions</h2>

          <br />

          <div className="actionGrid">

           <div
               className="actionCard"
               onClick={() => navigate("/add-hospital")}
           >
               🏥 Add Hospital
           </div>

           <div
               className="actionCard"
               onClick={() => navigate("/view-hospitals")}
           >
               📋 View Hospitals
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