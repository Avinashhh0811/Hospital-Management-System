import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getAllHospitals,
} from "../../services/hospitalService";

import "../../styles/superadmin/HospitalDetails.css";

function HospitalDetails() {

  const navigate = useNavigate();

  const { hospitalId } = useParams();

  const [hospital, setHospital] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  useEffect(() => {
    loadHospital();
  }, [hospitalId]);


  const loadHospital = async () => {

    try {

      setLoading(true);

      setError("");

      const response =
        await getAllHospitals();

      const hospitals =
        response.data || response || [];

      const foundHospital =
        hospitals.find(
          (item) =>
            String(item.hospitalId) ===
            String(hospitalId)
        );

      if (!foundHospital) {

        setError(
          "Hospital not found."
        );

        return;
      }

      setHospital(foundHospital);

    } catch (err) {

      console.error(err);

      setError(
        "Failed to load hospital details."
      );

    } finally {

      setLoading(false);

    }

  };


  const isAdminCreated =
    hospital &&
    (
      hospital.adminCreated === true ||
      hospital.adminCreated === "true" ||
      hospital.admin != null ||
      hospital.adminId != null
    );


  if (loading) {

    return (
      <div className="hospital-details-page">

        <div className="details-loading">
          Loading hospital details...
        </div>

      </div>
    );

  }


  if (error || !hospital) {

    return (
      <div className="hospital-details-page">

        <div className="details-error">

          <h2>
            Hospital Not Found
          </h2>

          <p>
            {error || "Unable to find hospital."}
          </p>

          <button
            className="back-button"
            onClick={() =>
              navigate("/super-admin/dashboard")
            }
          >
            ← Back to Dashboard
          </button>

        </div>

      </div>
    );

  }


  return (

    <div className="hospital-details-page">

      {/* ================= HEADER ================= */}

      <div className="details-header">

        <button
          className="back-button"
          onClick={() =>
            navigate("/super-admin/dashboard")
          }
        >
          ← Back to Dashboard
        </button>


        <div className="details-title">

          <div className="details-icon">
            🏥
          </div>

          <div>

            <h1>
              {hospital.hospitalName}
            </h1>

            <p>
              Hospital information and registration details
            </p>

          </div>

        </div>

      </div>


      {/* ================= BASIC INFO ================= */}

      <section className="details-card">

        <div className="details-card-header">

          <h2>
            Hospital Information
          </h2>

          <span
            className={
              isAdminCreated
                ? "details-status created"
                : "details-status pending"
            }
          >
            {isAdminCreated
              ? "✓ Admin Created"
              : "Admin Not Created"}
          </span>

        </div>


        <div className="details-grid">

          <div className="detail-item">

            <span>
              Hospital Name
            </span>

            <strong>
              {hospital.hospitalName || "—"}
            </strong>

          </div>


          <div className="detail-item">

            <span>
              Registration Number
            </span>

            <strong>
              {hospital.registrationNumber || "—"}
            </strong>

          </div>


          <div className="detail-item">

            <span>
              Hospital Type
            </span>

            <strong>
              {
                hospital.hospitalType ||
                hospital.type ||
                "—"
              }
            </strong>

          </div>


          <div className="detail-item">

            <span>
              Contact Number
            </span>

            <strong>
              {hospital.contactNumber || "—"}
            </strong>

          </div>


          <div className="detail-item">

            <span>
              Email
            </span>

            <strong>
              {hospital.email || "—"}
            </strong>

          </div>


          <div className="detail-item">

            <span>
              Website
            </span>

            <strong>
              {hospital.website || "—"}
            </strong>

          </div>

        </div>

      </section>


      {/* ================= ADDRESS ================= */}

      <section className="details-card">

        <div className="details-card-header">

          <h2>
            Address
          </h2>

        </div>


        <div className="address-grid">

          <div className="detail-item">

            <span>
              Address
            </span>

            <strong>
              {hospital.address || "—"}
            </strong>

          </div>


          <div className="detail-item">

            <span>
              City
            </span>

            <strong>
              {hospital.city || "—"}
            </strong>

          </div>


          <div className="detail-item">

            <span>
              State
            </span>

            <strong>
              {hospital.state || "—"}
            </strong>

          </div>


          <div className="detail-item">

            <span>
              Pincode
            </span>

            <strong>
              {hospital.pincode || "—"}
            </strong>

          </div>

        </div>

      </section>


      {/* ================= ADMIN STATUS ================= */}

      <section className="details-card">

        <div className="details-card-header">

          <div>

            <h2>
              Hospital Admin
            </h2>

            <p>
              Administrator access status for this hospital.
            </p>

          </div>

        </div>


        <div className="admin-status-box">

          <div
            className={
              isAdminCreated
                ? "admin-status-icon created"
                : "admin-status-icon pending"
            }
          >
            {isAdminCreated ? "✓" : "!"}
          </div>


          <div>

            <strong>
              {isAdminCreated
                ? "Hospital Admin Created"
                : "Hospital Admin Not Created"}
            </strong>

            <p>
              {isAdminCreated
                ? "This hospital already has administrator access."
                : "Administrator access has not been created yet."}
            </p>

          </div>

        </div>

      </section>


      {/* IMPORTANT:
          NO CREATE ADMIN BUTTON HERE
      */}

    </div>

  );
}

export default HospitalDetails;