import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getAllHospitalAdmins,
  deleteHospitalAdmin,
} from "../../services/adminService";

import "../../styles/superadmin/HospitalAdmins.css";


function HospitalAdmins() {

  const navigate = useNavigate();

  const [admins, setAdmins] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  // =====================================
  // LOAD ADMINS
  // =====================================

  const loadAdmins = async () => {

    try {

      setLoading(true);
      setError("");

      const response =
        await getAllHospitalAdmins();

      setAdmins(response.data || []);

    } catch (err) {

      console.error(
        "Failed to load hospital admins:",
        err
      );

      setError(
        "Unable to load hospital administrators."
      );

    } finally {

      setLoading(false);

    }
  };


  useEffect(() => {

    loadAdmins();

  }, []);


  // =====================================
  // DELETE ADMIN
  // =====================================

  const handleDelete = async (adminId) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this hospital admin?"
      );

    if (!confirmDelete) {
      return;
    }

    try {

      await deleteHospitalAdmin(adminId);

      await loadAdmins();

    } catch (err) {

      console.error(
        "Delete admin failed:",
        err
      );

      alert(
        "Unable to delete hospital admin."
      );
    }
  };


  return (

    <div className="hospital-admins-page">

      {/* =================================
          HEADER
      ================================= */}

      <div className="hospital-admins-header">

        <button
          className="admins-back-button"
          onClick={() =>
            navigate("/super-admin/dashboard")
          }
        >
          ← Back to Dashboard
        </button>


        <h1>
          Hospital Admins
        </h1>


        <p>
          Manage hospital administrator accounts.
        </p>

      </div>


      {/* =================================
          CONTENT
      ================================= */}

      <div className="hospital-admins-card">

        {loading && (

          <div className="admins-message">
            Loading hospital administrators...
          </div>

        )}


        {!loading && error && (

          <div className="admins-error">
            {error}
          </div>

        )}


        {!loading &&
          !error &&
          admins.length === 0 && (

            <div className="admins-empty">

              <div className="empty-admins-icon">
                ♙
              </div>

              <h2>
                No Hospital Admins
              </h2>

              <p>
                No hospital administrator accounts
                have been created yet.
              </p>

            </div>

        )}


        {!loading &&
          !error &&
          admins.length > 0 && (

            <div className="admins-table-wrapper">

              <table className="admins-table">

                <thead>

                  <tr>

                    <th>
                      Hospital
                    </th>

                    <th>
                      Admin Email
                    </th>

                    <th>
                      Status
                    </th>

                    <th>
                      Action
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {admins.map((admin) => (

                    <tr key={admin.id}>

                      <td>

                        <strong>
                          {admin.hospitalName || "—"}
                        </strong>

                      </td>


                      <td>
                        {admin.email}
                      </td>


                      <td>

                        <span className="admin-status">
                          ✓ Active
                        </span>

                      </td>


                      <td>

                        <button
                          className="delete-admin-button"
                          onClick={() =>
                            handleDelete(admin.id)
                          }
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

        )}

      </div>

    </div>

  );
}


export default HospitalAdmins;