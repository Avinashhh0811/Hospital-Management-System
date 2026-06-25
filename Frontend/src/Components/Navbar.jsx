import "./Navbar.css";
import { Search, Bell, CalendarDays } from "lucide-react";

function Navbar({ profileData }) {

  const today = new Date().toLocaleDateString();

  return (
    <div className="navbar">

      <div className="searchBox">
        <Search size={18}/>
        <input
          type="text"
          placeholder="Search hospitals, doctors..."
        />
      </div>

      <div className="navbarRight">

        <div className="dateBox">
          <CalendarDays size={18}/>
          <span>{today}</span>
        </div>

        <div className="notificationBox">
          <Bell size={20}/>
        </div>

        <div className="userBox">

          <div className="userAvatar">
            {profileData?.fullName?.charAt(0)?.toUpperCase() || "P"}
          </div>

          <div className="userInfo">
            <h4>{profileData?.fullName || "Patient"}</h4>
            <span>Patient</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;