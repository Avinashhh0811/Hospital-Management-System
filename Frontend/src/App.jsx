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
                        <ProtectedRoute>

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

            </Routes>

        </BrowserRouter>
    );
}

export default App;