import "./Sidebar.css";
import {
  LayoutDashboard,
  CalendarDays,
  History,
  FileText,
  User,
  LogOut
} from "lucide-react";

function Sidebar({ selected, setSelected, logout }) {

  return (
    <div className="sidebar">

      <div className="logoSection">
        <h1>🏥 HMS</h1>
        <p>Patient Portal</p>
      </div>

      <ul>

        <li
          className={selected==="Dashboard" ? "active" : ""}
          onClick={()=>setSelected("Dashboard")}
        >
          <LayoutDashboard size={20}/>
          Dashboard
        </li>

        <li
          className={selected==="Appointments" ? "active" : ""}
          onClick={()=>setSelected("Appointments")}
        >
          <CalendarDays size={20}/>
          Appointments
        </li>

        <li
          className={selected==="History" ? "active" : ""}
          onClick={()=>setSelected("History")}
        >
          <History size={20}/>
          History
        </li>

        <li
          className={selected==="Reports" ? "active" : ""}
          onClick={()=>setSelected("Reports")}
        >
          <FileText size={20}/>
          Reports
        </li>

        <li
          className={selected==="Profile" ? "active" : ""}
          onClick={()=>setSelected("Profile")}
        >
          <User size={20}/>
          Profile
        </li>

      </ul>

      <button
        className="logoutBtn"
        onClick={logout}
      >
        <LogOut size={18}/>
        Logout
      </button>

    </div>
  );
}

export default Sidebar;