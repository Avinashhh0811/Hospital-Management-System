import "./Dashboard.css";

import {
  CalendarDays,
  ClipboardList,
  User,
  FileText,
  History,
  LogOut
} from "lucide-react";

function Dashboard() {

  return (

    <div className="dashboard">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h1 className="logo">HMS</h1>

        <ul>

          <li className="active">Dashboard</li>

          <li>Appointments</li>

          <li>Doctors</li>

          <li>History</li>

          <li>Reports</li>

          <li>Profile</li>

          <li>Settings</li>

        </ul>

      </div>

      {/* MAIN */}

      <div className="main">

        <div className="hero">

          <div className="hero-text">

            <h1>
              Welcome Back 👋
            </h1>

            <p>
              Manage appointments, reports and
              health records easily with HMS.
            </p>

          </div>

        </div>

        <div className="cards">

          <div className="card blue">

            <CalendarDays size={70} color="white" />

            <h2>Book Appointment</h2>

          </div>

          <div className="card purple">

            <ClipboardList size={70} color="white" />

            <h2>Appointments</h2>

          </div>

          <div className="card green">

            <User size={70} color="white" />

            <h2>Profile</h2>

          </div>

          <div className="card cyan">

            <History size={70} color="white" />

            <h2>History</h2>

          </div>

          <div className="card orange">

            <FileText size={70} color="white" />

            <h2>Reports</h2>

          </div>

          <div className="card red">

            <LogOut size={70} color="white" />

            <h2>Logout</h2>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;