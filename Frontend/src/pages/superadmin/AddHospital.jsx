import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "../../styles/superadmin/AddHospital.css";

function AddHospital() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    hospitalName: "",
    registrationNumber: "",
    hospitalType: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    contactNumber: "",
    email: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.hospitalName.trim()) {
      return "Hospital name is required.";
    }

    if (!formData.registrationNumber.trim()) {
      return "Registration number is required.";
    }

    if (!formData.hospitalType) {
      return "Please select hospital type.";
    }

    if (!formData.address.trim()) {
      return "Address is required.";
    }

    if (!formData.city.trim()) {
      return "City is required.";
    }

    if (!formData.state.trim()) {
      return "State is required.";
    }

    if (!formData.pincode.trim()) {
      return "Pincode is required.";
    }

    if (!/^\d{6}$/.test(formData.pincode)) {
      return "Enter a valid 6-digit pincode.";
    }

    if (!formData.contactNumber.trim()) {
      return "Contact number is required.";
    }

    if (!/^\d{10}$/.test(formData.contactNumber)) {
      return "Enter a valid 10-digit contact number.";
    }

    if (!formData.email.trim()) {
      return "Email is required.";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return "Enter a valid email address.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      /*
       * Do not send fake adminId.
       *
       * Backend must determine/accept the correct admin
       * according to its current hospital creation logic.
       */
      const response = await api.post("/hospital/add", formData);

      console.log("Hospital created:", response.data);

      setSuccess("Hospital added successfully.");

      setTimeout(() => {
        navigate("/super-admin/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Add hospital error:", error);

      const message = error.response?.data;

      if (typeof message === "string") {
        setError(message);
      } else {
        setError("Unable to add hospital. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-hospital-page">

      <div className="add-hospital-container">

        <div className="add-hospital-header">

          <div>
            <h1>Add Hospital</h1>
            <p>
              Register a new hospital in the HMS platform.
            </p>
          </div>

          <button
            type="button"
            className="back-button"
            onClick={() => navigate("/super-admin/dashboard")}
          >
            ← Back
          </button>

        </div>

        <form
          className="add-hospital-form"
          onSubmit={handleSubmit}
        >

          <div className="form-section">

            <h2>Hospital Information</h2>

            <div className="form-grid">

              <div className="form-field full-width">
                <label>Hospital Name *</label>

                <input
                  type="text"
                  name="hospitalName"
                  placeholder="Enter hospital name"
                  value={formData.hospitalName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">

                <label>Registration Number *</label>

                <input
                  type="text"
                  name="registrationNumber"
                  placeholder="Hospital registration number"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                />

              </div>

              <div className="form-field">

                <label>Hospital Type *</label>

                <select
                  name="hospitalType"
                  value={formData.hospitalType}
                  onChange={handleChange}
                >
                  <option value="">
                    Select hospital type
                  </option>

                  <option value="General">
                    General
                  </option>

                  <option value="Multi-Speciality">
                    Multi-Speciality
                  </option>

                  <option value="Cardio">
                    Cardio
                  </option>

                  <option value="Government">
                    Government
                  </option>

                  <option value="Private">
                    Private
                  </option>

                </select>

              </div>

            </div>

          </div>

          <div className="form-section">

            <h2>Location</h2>

            <div className="form-grid">

              <div className="form-field full-width">

                <label>Address *</label>

                <textarea
                  name="address"
                  placeholder="Enter complete hospital address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                />

              </div>

              <div className="form-field">

                <label>City *</label>

                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleChange}
                />

              </div>

              <div className="form-field">

                <label>State *</label>

                <input
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={handleChange}
                />

              </div>

              <div className="form-field">

                <label>Pincode *</label>

                <input
                  type="text"
                  name="pincode"
                  placeholder="6-digit pincode"
                  maxLength="6"
                  value={formData.pincode}
                  onChange={handleChange}
                />

              </div>

            </div>

          </div>

          <div className="form-section">

            <h2>Contact Information</h2>

            <div className="form-grid">

              <div className="form-field">

                <label>Contact Number *</label>

                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="10-digit contact number"
                  maxLength="10"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />

              </div>

              <div className="form-field">

                <label>Email *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="hospital@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

              <div className="form-field full-width">

                <label>Website</label>

                <input
                  type="url"
                  name="website"
                  placeholder="https://example.com"
                  value={formData.website}
                  onChange={handleChange}
                />

              </div>

            </div>

          </div>

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          {success && (
            <div className="form-success">
              {success}
            </div>
          )}

          <div className="form-actions">

            <button
              type="button"
              className="cancel-button"
              onClick={() =>
                navigate("/super-admin/dashboard")
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-button"
              disabled={loading}
            >
              {loading
                ? "Adding Hospital..."
                : "Add Hospital"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddHospital;