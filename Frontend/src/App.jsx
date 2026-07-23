import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home.jsx";

import Login from "./pages/Login.jsx";

import Register from "./pages/Register.jsx";

import Dashboard from "./pages/Dashboard.jsx";

import Patients from "./pages/Patients.jsx";

import Doctors from "./pages/Doctors.jsx";

import Appointments from "./pages/Appointments.jsx";

import AddPatient from "./pages/AddPatient.jsx";

import ProtectedRoute from "./pages/ProtectedRoute.jsx";

import NotFound from "./pages/NotFound.jsx";

import ForgotPassword from "./pages/ForgotPassword";

import AdminLogin from "./pages/AdminLogin";

import HospitalAdminDashboard from "./pages/HospitalAdminDashboard";

import SuperAdminLogin from "./pages/SuperAdminLogin";

import SuperAdminDashboard from "./pages/SuperAdminDashboard";

import AddHospital from "./pages/AddHospital";

import ViewHospitals from "./pages/ViewHospitals";

import CreateHospitalAdmin from "./pages/CreateHospitalAdmin";

import EditHospital from "./pages/EditHospital";

import AddDoctor from "./pages/AddDoctor";

import ViewDoctors from "./pages/ViewDoctors";

import EditDoctor from "./pages/EditDoctor";

import HospitalPortal from "./pages/HospitalPortal";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* HOME PAGE */}

                <Route
                    path="/"
                    element={<Home />}
                />

                {/* LOGIN PAGE */}

                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* DYNAMIC REGISTER PAGE */}

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* DASHBOARD */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute allowedRole="ROLE_PATIENT">
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                {/* PATIENTS */}

                <Route
                    path="/patients"
                    element={
                        <ProtectedRoute>

                            <Patients />

                        </ProtectedRoute>
                    }
                />

                {/* DOCTORS */}

                <Route
                    path="/doctors"
                    element={
                        <ProtectedRoute>

                            <Doctors />

                        </ProtectedRoute>
                    }
                />

                {/* APPOINTMENTS */}

                <Route
                    path="/appointments"
                    element={
                        <ProtectedRoute>

                            <Appointments />

                        </ProtectedRoute>
                    }
                />

                {/* ADD PATIENT */}

                <Route
                    path="/add-patient"
                    element={
                        <ProtectedRoute>

                            <AddPatient />

                        </ProtectedRoute>
                    }
                />

                {/* NOT FOUND */}

                <Route
                    path="*"
                    element={<NotFound />}
                />

                <Route
                  path="/forgot-password"
                  element={<ForgotPassword />}
                />

                {/* HOSPITAL ADMIN LOGIN */}

                <Route
                    path="/admin-login"
                    element={<AdminLogin />}
                />

                {/* HOSPITAL ADMIN DASHBOARD */}

                <Route
                    path="/admin-dashboard"
                    element={
                        <ProtectedRoute allowedRole="ROLE_HOSPITAL_ADMIN">
                            <HospitalAdminDashboard/>
                        </ProtectedRoute>
                    }
                />

                {/* SUPER ADMIN LOGIN */}

                <Route
                    path="/super-admin-login"
                    element={<SuperAdminLogin />}
                />

                {/* SUPER ADMIN DASHBOARD */}

                <Route
                    path="/super-admin-dashboard"
                    element={
                        <ProtectedRoute allowedRole="ROLE_SUPER_ADMIN">
                            <SuperAdminDashboard />
                        </ProtectedRoute>
                    }
                />

                {/* ADD HOSPITAL */}

                <Route
                    path="/add-hospital"
                    element={
                        <ProtectedRoute allowedRole="ROLE_SUPER_ADMIN">
                            <AddHospital />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/view-hospitals"
                    element={
                        <ProtectedRoute allowedRole="ROLE_SUPER_ADMIN">
                            <ViewHospitals />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/create-hospital-admin"
                    element={
                        <ProtectedRoute allowedRole="ROLE_SUPER_ADMIN">
                            <CreateHospitalAdmin />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/edit-hospital/:hospitalId"
                    element={
                        <ProtectedRoute allowedRole="ROLE_SUPER_ADMIN">
                            <EditHospital/>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/add-doctor"
                    element={
                        <ProtectedRoute allowedRole="ROLE_HOSPITAL_ADMIN">
                            <AddDoctor/>
                        </ProtectedRoute>
                    }
                />


                <Route
                    path="/view-doctors"
                    element={
                        <ProtectedRoute allowedRole="ROLE_HOSPITAL_ADMIN">
                            <ViewDoctors/>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/edit-doctor/:doctorId"
                    element={
                        <ProtectedRoute allowedRole="ROLE_HOSPITAL_ADMIN">
                            <EditDoctor />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/hospital-portal"
                    element={<HospitalPortal />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;