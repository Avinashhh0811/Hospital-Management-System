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
import axios from "axios";
import {useState,useEffect } from "react";



import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const [selected, setSelected] =
    useState("Dashboard");

 const [profileData, setProfileData] = useState({

   fullName: "",
   email: "",
   phone: "",
   role: "",
   age: "",
   gender: "",
   bloodGroup: "",
   address: ""

 });

useEffect(() => {

  const fetchProfile = async () => {

    try {

      const email =
        localStorage.getItem("email");

      const response = await axios.get(

        `http://localhost:8080/patient/profile/${email}`
      );

      setProfileData(response.data);

    }

    catch(error){

      console.log(error);
    }
  };

  fetchProfile();

}, []);

  const fetchProfile = async () => {

    try {

      const email =
        localStorage.getItem("email");

      const response =
        await axios.get(

          `http://localhost:8080/patient/profile/${email}`
        );

      setProfileData(response.data);

    }

    catch(error){

      console.log(error);
    }
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

        {/* PROFILE */}

        {
          selected === "Profile" && (

            <div className="profilePage">

              {/* TOP PROFILE */}

              <div className="profileHero">

                <div className="profileLeft">

                  <div className="profileAvatar">

                    {
                      profileData?.fullName
                      ?.charAt(0)
                      ?.toUpperCase()
                    }

                  </div>

                  <div>

                    <h1>
                      {profileData?.fullName}
                    </h1>

                    <p>
                      HMS Patient Portal
                    </p>

                  </div>

                </div>

                <button className="editBtn">

                  Edit Profile

                </button>

              </div>

              {/* DETAILS */}

              <div className="profileGrid">

                <div className="infoCard">

                  <h3>Full Name</h3>

                  <p>
                    {profileData?.fullName}
                  </p>

                </div>

                <div className="infoCard">

                  <h3>Email</h3>

                  <p>
                    {profileData?.email}
                  </p>

                </div>

                <div className="infoCard">

                  <h3>Phone</h3>

                  <p>
                    {profileData?.phone}
                  </p>

                </div>

                <div className="infoCard">

                  <h3>Role</h3>

                  <p>
                    {profileData?.role}
                  </p>

                </div>

                <div className="infoCard">

                  <h3>Age</h3>

                  <p>
                    {profileData?.age}
                  </p>

                </div>

                <div className="infoCard">

                  <h3>Gender</h3>

                  <p>
                    {profileData?.gender}
                  </p>

                </div>

                <div className="infoCard">

                  <h3>Blood Group</h3>

                  <p>
                    {profileData?.bloodGroup}
                  </p>

                </div>

                <div className="infoCard addressCard">

                  <h3>Address</h3>

                  <p>
                    {profileData?.address}
                  </p>

                </div>

              </div>

            </div>
          )
        }

      </div>

    </div>
  );
}

export default Dashboard;