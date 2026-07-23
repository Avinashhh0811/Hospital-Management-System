import "./HospitalAdminDashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HospitalAdminDashboard() {

    const navigate = useNavigate();

    const loadDashboard = async () => {

        try{

            const hospitalId =
                localStorage.getItem("hospitalId");

            const response =
                await axios.get(

                    `http://localhost:8080/dashboard/${hospitalId}`

                );

            setDashboard(response.data);

        }

        catch(error){

            console.log(error);

        }

    };

    const hospitalName =
        localStorage.getItem("hospitalName");

    const today = new Date().toLocaleDateString(
        "en-IN",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

    // Dashboard Counts (Backend madhun yenar)

    const [dashboard, setDashboard] = useState({

        doctorCount: 0,

        employeeCount: 0,

        patientCount: 0,

        todayAppointments: 0

    });

    // Today's Appointments

    const [todayAppointments, setTodayAppointments] =
        useState([]);

    // Tomorrow Appointments

    const [tomorrowAppointments, setTomorrowAppointments] =
        useState([]);

   useEffect(() => {

       loadDashboard();

   }, []);

    const logout = () => {

        localStorage.clear();

        navigate("/");

    };

    return (

        <div className="hospitalDashboard">

            {/* Header */}

            <div className="dashboardHeader">

                <div>

                    <span className="adminBadge">

                        HOSPITAL ADMIN PANEL

                    </span>

                    <h1>

                        🏥 {hospitalName}

                    </h1>

                    <p>

                        {today}

                    </p>

                </div>

                <button
                    className="logoutBtn"
                    onClick={logout}
                >

                    Logout

                </button>

            </div>

            {/* Dashboard Cards */}

            <div className="dashboardCards">

                <div className="dashboardCard">

                    <h1>👨‍⚕️</h1>

                    <h2>

                        {dashboard.doctorCount}

                    </h2>

                    <p>

                        Total Doctors

                    </p>

                </div>

                <div className="dashboardCard">

                    <h1>👨‍💼</h1>

                    <h2>

                        {dashboard.employeeCount}

                    </h2>

                    <p>
                             Staff

                    </p>

                </div>

                <div className="dashboardCard">

                    <h1>👤</h1>

                    <h2>

                        {dashboard.patientCount}

                    </h2>

                    <p>

                        Patients

                    </p>

                </div>

                <div className="dashboardCard">

                    <h1>📅</h1>

                    <h2>

                        {dashboard.todayAppointments}

                    </h2>

                    <p>

                        Today's Appointments

                    </p>

                </div>

            </div>

            {/* Quick Actions */}

            <div className="quickActionSection">

                <h2>

                    Quick Actions

                </h2>

                <div className="quickActionGrid">

                    <div
                        className="actionCard"
                        onClick={() =>
                            navigate("/add-doctor")
                        }
                    >

                        👨‍⚕️

                        <h3>

                            Add Doctor

                        </h3>

                    </div>

                    <div
                        className="actionCard"
                        onClick={() =>
                            navigate("/view-doctors")
                        }
                    >

                        🩺

                        <h3>

                            Doctors

                        </h3>

                    </div>

                    <div
                        className="actionCard"
                        onClick={() =>
                            navigate("/employees")
                        }
                    >

                        👨‍💼

                        <h3>

                            Staff

                        </h3>

                    </div>

                    <div
                        className="actionCard"
                        onClick={() =>
                            navigate("/appointments")
                        }
                    >

                        📅

                        <h3>

                            Appointments

                        </h3>

                    </div>

                    <div
                        className="actionCard"
                        onClick={() =>
                            navigate("/reports")
                        }
                    >

                        📄

                        <h3>

                            Reports

                        </h3>

                    </div>

                </div>

            </div>

            {/* Today's Appointments */}

            <div className="appointmentCard">

                <h2>

                    Today's Appointments

                </h2>

                <table>

                    <thead>

                    <tr>

                        <th>Patient</th>

                        <th>Doctor</th>

                        <th>Time</th>

                        <th>Status</th>

                    </tr>

                    </thead>

                    <tbody>

                    {

                        todayAppointments.length === 0 ?

                            <tr>

                                <td
                                    colSpan="4"
                                    className="noData"
                                >

                                    No Appointments Today

                                </td>

                            </tr>

                            :

                            todayAppointments.map((appointment) => (

                                <tr>

                                    <td>

                                        {appointment.patient}

                                    </td>

                                    <td>

                                        {appointment.doctor}

                                    </td>

                                    <td>

                                        {appointment.time}

                                    </td>

                                    <td>

                                        {appointment.status}

                                    </td>

                                </tr>

                            ))

                    }

                    </tbody>

                </table>

            </div>

            {/* Tomorrow */}

            <div className="appointmentCard">

                <h2>

                    Tomorrow's Appointments

                </h2>

                <table>

                    <thead>

                    <tr>

                        <th>Patient</th>

                        <th>Doctor</th>

                        <th>Time</th>

                        <th>Status</th>

                    </tr>

                    </thead>

                    <tbody>

                    {

                        tomorrowAppointments.length === 0 ?

                            <tr>

                                <td
                                    colSpan="4"
                                    className="noData"
                                >

                                    No Upcoming Appointments

                                </td>

                            </tr>

                            :

                            tomorrowAppointments.map((appointment) => (

                                <tr>

                                    <td>

                                        {appointment.patient}

                                    </td>

                                    <td>

                                        {appointment.doctor}

                                    </td>

                                    <td>

                                        {appointment.time}

                                    </td>

                                    <td>

                                        {appointment.status}

                                    </td>

                                </tr>

                            ))

                    }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default HospitalAdminDashboard;