import {
  Building2,
  Stethoscope,
  CalendarDays,
  FileText
} from "lucide-react";

function DashboardHome() {

  return (

    <>

      <div className="welcomeCard">

        <div>

          <span className="welcomeBadge">
            Patient Dashboard
          </span>

          <h1>Welcome Back 👋</h1>

          <p>
            Book appointments, manage records
            and track your healthcare journey.
          </p>

        </div>

      </div>
      <div className="statsGrid">

        <div className="statCard">

          <Building2 size={32} />

          <h3>Hospitals</h3>

          <h2>Available</h2>

        </div>

        <div className="statCard">

          <Stethoscope size={32} />

          <h3>Doctors</h3>

          <h2>Available</h2>

        </div>

        <div className="statCard">

          <CalendarDays size={32} />

          <h3>Appointments</h3>

          <h2>Manage</h2>

        </div>

        <div className="statCard">

          <FileText size={32} />

          <h3>Reports</h3>

          <h2>View</h2>

        </div>

      </div>

      <div className="quickSection">

        <h2>Quick Actions</h2>

        <div className="actionGrid">

          <div className="actionCard">
            Book Appointment
          </div>

          <div className="actionCard">
            View Reports
          </div>

          <div className="actionCard">
            Medical History
          </div>

        </div>

      </div>

    </>

  );
}

export default DashboardHome;