import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import "../../styles/superadmin/SuperAdminLogin.css";

function SuperAdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const data = await loginUser(email, password);

      console.log("Login Response:", data);

      // Only Super Admin is allowed here
      if (data.role !== "ROLE_SUPER_ADMIN") {
        setError("Access denied. Super Admin account required.");
        return;
      }

      // Save authentication details
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      localStorage.setItem("role", data.role);

      // Super Admin has no hospital
      localStorage.removeItem("hospitalId");
      localStorage.removeItem("hospitalName");

      // Go to dashboard
      navigate("/super-admin/dashboard");

    } catch (error) {
      console.error("Login Error:", error);

      const message = error.response?.data;

      if (typeof message === "string") {
        setError(message);
      } else {
        setError("Login failed. Please check your credentials.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="super-admin-login-page">

      <div className="super-admin-login-card">

        <div className="login-header">

          <div className="login-logo">
            🏥
          </div>

          <h1>Hospital Management System</h1>

          <p>Super Admin Portal</p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />

          </div>

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="password-container">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

        </form>

        <div className="login-footer">
          Authorized Super Admin Access
        </div>

      </div>

    </div>
  );
}

export default SuperAdminLogin;