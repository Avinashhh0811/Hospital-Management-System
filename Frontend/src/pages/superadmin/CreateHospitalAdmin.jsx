import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../../services/api";
import "../../styles/superadmin/CreateHospitalAdmin.css";

function CreateHospitalAdmin() {

  const navigate = useNavigate();

  const { hospitalId } = useParams();

  const [hospital, setHospital] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loadingHospital, setLoadingHospital] = useState(true);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  useEffect(() => {
    fetchHospital();
  }, [hospitalId]);


  const fetchHospital = async () => {

    try {

      setLoadingHospital(true);
      setError("");

      const response = await api.get(
        `/hospital/${hospitalId}`
      );

      setHospital(response.data);

    } catch (error) {

      console.error(
        "Hospital details error:",
        error
      );

      setError(
        "Unable to load hospital details."
      );

    } finally {

      setLoadingHospital(false);

    }

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");


    if (!email.trim()) {

      setError("Admin email is required.");
      return;

    }


    if (!/\S+@\S+\.\S+/.test(email)) {

      setError(
        "Please enter a valid email address."
      );

      return;

    }


    if (!password) {

      setError("Password is required.");
      return;

    }


    if (password.length < 6) {

      setError(
        "Password must contain at least 6 characters."
      );

      return;

    }


    try {

      setLoading(true);


      const payload = {

        email: email.trim(),

        password: password,

        hospitalId: Number(hospitalId),

      };


      const response = await api.post(
        "/api/admin/create-hospital-admin",
        payload
      );


      console.log(
        "Create Admin Response:",
        response.data
      );


      if (
        response.data ===
        "Hospital Admin Created Successfully"
      ) {

        setSuccess(
          "Hospital Admin created successfully."
        );

        setEmail("");
        setPassword("");

        setTimeout(() => {

          navigate(
            "/super-admin/dashboard"
          );

        }, 1200);

        return;
      }


      setError(
        response.data ||
        "Unable to create hospital admin."
      );


    } catch (error) {

      console.error(
        "Create admin error:",
        error
      );

      setError(
        typeof error.response?.data === "string"
          ? error.response.data
          : "Unable to create hospital admin."
      );

    } finally {

      setLoading(false);

    }

  };


  if (loadingHospital) {

    return (
      <div className="create-admin-page">

        <div className="create-admin-loading">
          Loading hospital details...
        </div>

      </div>
    );

  }


  return (

    <div className="create-admin-page">

      <div className="create-admin-container">


        {/* Header */}

        <div className="create-admin-header">

          <div>

            <h1>
              Create Hospital Admin
            </h1>

            <p>
              Create login access for this hospital.
            </p>

          </div>


          <button
            type="button"
            className="back-button"
            onClick={() =>
              navigate(
                "/super-admin/dashboard"
              )
            }
          >
            ← Back
          </button>

        </div>


        {/* Hospital Info */}

        {hospital && (

          <div className="selected-hospital-card">

            <div className="selected-hospital-icon">
              🏥
            </div>

            <div className="selected-hospital-info">

              <span>
                Creating admin for
              </span>

              <h2>
                {hospital.hospitalName}
              </h2>

              <p>

                {hospital.city || "—"}
                {hospital.state
                  ? `, ${hospital.state}`
                  : ""}

                {" • "}

                {hospital.hospitalType || "Hospital"}

              </p>

            </div>

          </div>

        )}


        {/* Form */}

        <div className="create-admin-card">

          <div className="card-header">

            <div className="admin-icon">
              👤
            </div>

            <div>

              <h2>
                Admin Credentials
              </h2>

              <p>
                These credentials will be used
                by the hospital administrator.
              </p>

            </div>

          </div>


          <form
            className="create-admin-form"
            onSubmit={handleSubmit}
          >


            {/* Email */}

            <div className="form-field">

              <label>
                Admin Email *
              </label>

              <input
                type="email"
                placeholder="Enter hospital admin email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>


            {/* Password */}

            <div className="form-field">

              <label>
                Password *
              </label>

              <div className="password-wrapper">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>

              </div>

              <small className="field-help">
                Minimum 6 characters.
              </small>

            </div>


            {/* Error */}

            {error && (

              <div className="form-error">
                {error}
              </div>

            )}


            {/* Success */}

            {success && (

              <div className="form-success">
                {success}
              </div>

            )}


            {/* Actions */}

            <div className="form-actions">

              <button
                type="button"
                className="cancel-button"
                onClick={() =>
                  navigate(
                    "/super-admin/dashboard"
                  )
                }
              >
                Cancel
              </button>


              <button
                type="submit"
                className="create-button"
                disabled={loading}
              >

                {loading
                  ? "Creating..."
                  : "Create Hospital Admin"}

              </button>

            </div>

          </form>

        </div>

      </div>

    </div>

  );

}

export default CreateHospitalAdmin;