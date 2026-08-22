import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getAllHospitals,
} from "../../services/hospitalService";

import "../../styles/superadmin/SuperAdminDashboard.css";

function SuperAdminDashboard() {
  const navigate = useNavigate();

  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadHospitals();
  }, []);

  const loadHospitals = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getAllHospitals();

      console.log("Hospitals:", response);

      setHospitals(response.data || response || []);
    } catch (err) {
      console.error("Failed to load hospitals:", err);

      setError("Failed to load hospitals.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAdmin = (hospital) => {
    navigate(
      `/super-admin/create-hospital-admin/${hospital.hospitalId}`
    );
  };

  const handleViewDetails = (hospital) => {
    navigate(
      `/super-admin/hospital/${hospital.hospitalId}`
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");

    navigate("/super-admin/login");
  };

  const getHospitalLocation = (hospital) => {
    const city = hospital.city || "";
    const state = hospital.state || "";

    if (city && state) {
      return `${city}, ${state}`;
    }

    return city || state || "—";
  };

  const isAdminCreated = (hospital) => {
    return (
      hospital.adminCreated === true ||
      hospital.adminCreated === "true" ||
      hospital.admin != null ||
      hospital.adminId != null
    );
  };

  return (
    <div className="super-admin-layout">

      {/* ================= SIDEBAR ================= */}

      <aside className="super-admin-sidebar">

        <div className="sidebar-brand">

          <div className="brand-icon">
            🏥
          </div>

          <div>
            <h2>HMS</h2>
            <span>Super Admin</span>
          </div>

        </div>


        <div className="sidebar-divider"></div>


        <nav className="sidebar-nav">

          <button
            className="sidebar-item active"
            onClick={() =>
              navigate("/super-admin/dashboard")
            }
          >
            <span className="sidebar-item-icon">
              ▦
            </span>

            Dashboard
          </button>


          <button
            className="sidebar-item"
            onClick={() =>
              navigate("/super-admin/add-hospital")
            }
          >
            <span className="sidebar-item-icon">
              ＋
            </span>

            Add Hospital
          </button>


          <button
            className="sidebar-item"
            onClick={() =>
              navigate("/super-admin/hospital-admins")
            }
          >
            <span className="sidebar-item-icon">
              ♙
            </span>

            Hospital Admins
          </button>

        </nav>


        <button
          className="logout-button"
          onClick={handleLogout}
        >
          <span>↪</span>
          Logout
        </button>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="super-admin-main">

        {/* HEADER */}

        <header className="dashboard-header">

          <div>
            <h1>Dashboard</h1>

            <p>
              Manage hospitals and hospital administrators.
            </p>
          </div>


          <div className="admin-profile">

            <div className="admin-avatar">
              SA
            </div>

            <div>
              <strong>
                Super Admin
              </strong>

              <span>
                superadmin@hms.com
              </span>
            </div>

          </div>

        </header>


        {/* ================= STATS ================= */}

        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon blue">
              🏥
            </div>

            <div>
              <span>Total Hospitals</span>

              <strong>
                {hospitals.length}
              </strong>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon green">
              ✓
            </div>

            <div>
              <span>Registered Hospitals</span>

              <strong>
                {hospitals.length}
              </strong>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon purple">
              ♙
            </div>

            <div>

              <span>
                Hospital Admins
              </span>

              <strong>

                {
                  hospitals.filter(
                    (hospital) =>
                      isAdminCreated(hospital)
                  ).length
                }

              </strong>

            </div>

          </div>

        </section>


        {/* ================= HOSPITAL SECTION ================= */}

        <section className="hospital-section">

          <div className="hospital-section-header">

            <div>

              <h2>
                Hospitals
              </h2>

              <p>
                Manage registered hospitals and their administrators.
              </p>

            </div>


            <button
              className="add-hospital-button"
              onClick={() =>
                navigate("/super-admin/add-hospital")
              }
            >
              + Add Hospital
            </button>

          </div>


          {/* ERROR */}

          {error && (
            <div className="dashboard-error">
              {error}
            </div>
          )}


          {/* LOADING */}

          {loading ? (

            <div className="dashboard-loading">
              Loading hospitals...
            </div>

          ) : hospitals.length === 0 ? (

            <div className="empty-hospitals">
              No hospitals registered yet.
            </div>

          ) : (

            <div className="hospital-table-wrapper">

              <table className="hospital-table">

                <thead>

                  <tr>

                    <th>
                      Hospital
                    </th>

                    <th>
                      Location
                    </th>

                    <th>
                      Type
                    </th>

                    <th>
                      Admin
                    </th>

                    <th>
                      Actions
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {hospitals.map((hospital) => {

                    const adminCreated =
                      isAdminCreated(hospital);

                    return (

                      <tr
                        key={hospital.hospitalId}
                      >

                        {/* HOSPITAL */}

                        <td>

                          <div className="hospital-name">

                            <div className="table-hospital-icon">
                              🏥
                            </div>

                            <div>

                              <strong>
                                {
                                  hospital.hospitalName ||
                                  "Unnamed Hospital"
                                }
                              </strong>

                              <span>
                                {
                                  hospital.registrationNumber ||
                                  "No registration number"
                                }
                              </span>

                            </div>

                          </div>

                        </td>


                        {/* LOCATION */}

                        <td>

                          <div className="location-info">

                            {
                              getHospitalLocation(
                                hospital
                              )
                            }

                          </div>

                        </td>


                        {/* TYPE */}

                        <td>

                          <span className="hospital-type">

                            {
                              hospital.hospitalType ||
                              hospital.type ||
                              "General"
                            }

                          </span>

                        </td>


                        {/* ADMIN STATUS */}

                        <td>

                          {adminCreated ? (

                            <span className="status-badge created">
                              ✓ Admin Created
                            </span>

                          ) : (

                            <span className="status-badge pending">
                              Admin Not Created
                            </span>

                          )}

                        </td>


                        {/* ACTIONS */}

                        <td>
  <div className="hospital-actions">

    <button
      className="view-button"
      onClick={() => handleViewDetails(hospital)}
    >
      View Details
    </button>

    {!adminCreated && (
      <button
        className="create-admin-small-button"
        onClick={() => handleCreateAdmin(hospital)}
      >
        Create Admin
      </button>
    )}

  </div>
</td>

                      </tr>

                    );

                  })}

                </tbody>

              </table>

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default SuperAdminDashboard;