function AdminDashboard() {

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#020617",
        color:"white",
        padding:"40px"
      }}
    >

      <h1>Hospital Admin Dashboard 🏥</h1>

      <br />

      <div
        style={{
          display:"flex",
          gap:"20px",
          flexWrap:"wrap"
        }}
      >

        <div className="dashCard">
          Add Doctor
        </div>

        <div className="dashCard">
          Remove Doctor
        </div>

        <div className="dashCard">
          View Patients
        </div>

        <div className="dashCard">
          View Appointments
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;