import "./Dashboard.css";
import { useState } from "react";

import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

import DashboardHome from "./DashboardHome";
import Appointments from "./Appointments";

function Dashboard() {

  const [selected, setSelected] =
    useState("Dashboard");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (

    <div className="dashboard">

      <Sidebar
        selected={selected}
        setSelected={setSelected}
        logout={logout}
      />

      <div className="mainContent">

        <Navbar />

        {
          selected === "Dashboard" &&
          <DashboardHome />
        }

        {
          selected === "Appointments" &&
          <Appointments />
        }

      </div>

    </div>

  );
}

export default Dashboard;