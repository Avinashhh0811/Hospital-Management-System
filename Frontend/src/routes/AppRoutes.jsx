import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
  } from "react-router-dom";
  
  import LandingPage from "../pages/LandingPage";
  
  import SuperAdminLogin from "../pages/superadmin/SuperAdminLogin";
  import SuperAdminDashboard from "../pages/superadmin/SuperAdminDashboard";
  import AddHospital from "../pages/superadmin/AddHospital";
  import CreateHospitalAdmin from "../pages/superadmin/CreateHospitalAdmin";
  import HospitalDetails from "../pages/superadmin/HospitalDetails";
  import HospitalAdmins from "../pages/superadmin/HospitalAdmins";
  
  import ProtectedRoute from "./ProtectedRoutes";
  
  
  function AppRoutes() {
  
    return (
      <BrowserRouter>
  
        <Routes>
  
          {/* ==============================
              MAIN LANDING PAGE
          ============================== */}
  
          <Route
            path="/"
            element={<LandingPage />}
          />
  
  
          {/* ==============================
              SUPER ADMIN LOGIN
          ============================== */}
  
          <Route
            path="/super-admin/login"
            element={<SuperAdminLogin />}
          />
  
  
          {/* ==============================
              SUPER ADMIN DASHBOARD
          ============================== */}
  
          <Route
            path="/super-admin/dashboard"
            element={
              <ProtectedRoute>
                <SuperAdminDashboard />
              </ProtectedRoute>
            }
          />
  
  
          {/* ==============================
              ADD HOSPITAL
          ============================== */}
  
          <Route
            path="/super-admin/add-hospital"
            element={
              <ProtectedRoute>
                <AddHospital />
              </ProtectedRoute>
            }
          />
  
  
          {/* ==============================
              CREATE HOSPITAL ADMIN
          ============================== */}
  
          <Route
            path="/super-admin/create-hospital-admin/:hospitalId"
            element={
              <ProtectedRoute>
                <CreateHospitalAdmin />
              </ProtectedRoute>
            }
          />
  
  
          {/* ==============================
              HOSPITAL DETAILS
          ============================== */}
  
          <Route
            path="/super-admin/hospital/:hospitalId"
            element={
              <ProtectedRoute>
                <HospitalDetails />
              </ProtectedRoute>
            }
          />
  
  
          {/* ==============================
              HOSPITAL ADMINS
          ============================== */}
  
          <Route
            path="/super-admin/hospital-admins"
            element={
              <ProtectedRoute>
                <HospitalAdmins />
              </ProtectedRoute>
            }
          />
  
  
          {/* ==============================
              HOSPITAL LOGIN
          ============================== */}
  
          <Route
            path="/hospital/login"
            element={
              <div>
                Hospital Login Coming Soon
              </div>
            }
          />
  
  
          {/* ==============================
              PATIENT LOGIN
          ============================== */}
  
          <Route
            path="/patient/login"
            element={
              <div>
                Patient Login Coming Soon
              </div>
            }
          />
  
  
          {/* ==============================
              UNKNOWN URL
          ============================== */}
  
          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
  
        </Routes>
  
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;