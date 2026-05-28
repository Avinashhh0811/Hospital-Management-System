import "./Dashboard.css";

import {
  LayoutDashboard,
  CalendarDays,
  ClipboardList,
  User,
  History,
  FileText,
  LogOut,
  Bell,
  Search
} from "lucide-react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const [selected, setSelected] =
    useState("Dashboard");

  const profileData = {

    fullName:
      localStorage
        .getItem("email")
        ?.split("@")[0],

    email:
      localStorage
        .getItem("email"),

    role:
      localStorage
        .getItem("role"),

    phone:
      "9876543210"
  };

  const logout = () => {

    localStorage.clear();

    navigate("/");
  };

  return (

    <div className="dashboard">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h1>HMS</h1>

        <ul>

          <li
            onClick={()=>
              setSelected("Dashboard")
            }
          >
            <LayoutDashboard size={22}/>
            Dashboard
          </li>

          <li
            onClick={()=>
              setSelected("Appointments")
            }
          >
            <CalendarDays size={22}/>
            Appointments
          </li>

          <li
            onClick={()=>
              setSelected("Doctors")
            }
          >
            <User size={22}/>
            Doctors
          </li>

          <li
            onClick={()=>
              setSelected("History")
            }
          >
            <History size={22}/>
            History
          </li>

          <li
            onClick={()=>
              setSelected("Reports")
            }
          >
            <FileText size={22}/>
            Reports
          </li>

          <li
            onClick={()=>
              setSelected("Profile")
            }
          >
            <User size={22}/>
            Profile
          </li>

        </ul>

      </div>

      {/* MAIN */}

      <div className="mainContent">

        {/* TOPBAR */}

        <div className="topBar">

          <div className="searchBox">

            <Search size={20}/>

            <input
              type="text"
              placeholder="Search..."
            />

          </div>

          <Bell
            size={28}
            className="bellIcon"
          />

        </div>

        {/* DASHBOARD */}

        {
          selected === "Dashboard" && (

            <>

              <div className="welcomeCard">

                <h1>
                  Welcome Back 👋
                </h1>

                <p>
                  Manage appointments and
                  health records easily.
                </p>

              </div>

              <div className="cardGrid">

                <div
                  className="card blue"
                  onClick={()=>
                    setSelected("Appointments")
                  }
                >

                  <CalendarDays size={60}/>

                  <h2>
                    Book Appointment
                  </h2>

                </div>

                <div
                  className="card purple"
                  onClick={()=>
                    setSelected("Appointments")
                  }
                >

                  <ClipboardList size={60}/>

                  <h2>
                    Appointments
                  </h2>

                </div>

                <div
                  className="card green"
                  onClick={()=>
                    setSelected("Profile")
                  }
                >

                  <User size={60}/>

                  <h2>
                    Profile
                  </h2>

                </div>

                <div
                  className="card cyan"
                  onClick={()=>
                    setSelected("History")
                  }
                >

                  <History size={60}/>

                  <h2>
                    History
                  </h2>

                </div>

                <div
                  className="card orange"
                  onClick={()=>
                    setSelected("Reports")
                  }
                >

                  <FileText size={60}/>

                  <h2>
                    Reports
                  </h2>

                </div>

                <div
                  className="card red"
                  onClick={logout}
                >

                  <LogOut size={60}/>

                  <h2>
                    Logout
                  </h2>

                </div>

              </div>

            </>
          )
        }

        {/* APPOINTMENTS */}

        {
          selected === "Appointments" && (

            <div className="sectionBox">

              <h1>
                My Appointments
              </h1>

              <div className="doctorCard">

                <div>

                  <h2>
                    Dr. Sharma
                  </h2>

                  <p>
                    Cardiologist
                  </p>

                </div>

              </div>

            </div>
          )
        }

        {/* DOCTORS */}

        {
          selected === "Doctors" && (

            <div className="sectionBox">

              <h1>
                Doctors
              </h1>

              <div className="doctorCard">

                <div>

                  <h2>
                    Dr. Mehta
                  </h2>

                  <p>
                    Neurologist
                  </p>

                </div>

              </div>

            </div>
          )
        }

        {/* HISTORY */}

        {
          selected === "History" && (

            <div className="sectionBox">

              <h1>
                Medical History
              </h1>

              <p>
                Your previous appointments
                and records will appear here.
              </p>

            </div>
          )
        }

        {/* REPORTS */}

        {
          selected === "Reports" && (

            <div className="sectionBox">

              <h1>
                Reports
              </h1>

              <p>
                Your medical reports
                will appear here.
              </p>

            </div>
          )
        }

        {/* PROFILE */}

        {
          selected === "Profile" && (

            <div className="sectionBox">

              <h1>
                My Profile
              </h1>

              <div className="profileDetails">

                <p>

                  <strong>Name:</strong>

                  {" "}

                  {
                    profileData.fullName
                  }

                </p>

                <p>

                  <strong>Email:</strong>

                  {" "}

                  {
                    profileData.email
                  }

                </p>

                <p>

                  <strong>Role:</strong>

                  {" "}

                  {
                    profileData.role
                  }

                </p>

                <p>

                  <strong>Phone:</strong>

                  {" "}

                  {
                    profileData.phone
                  }

                </p>

              </div>

            </div>
          )
        }

      </div>

    </div>
  );
}

export default Dashboard;