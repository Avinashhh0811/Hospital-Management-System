function AdminDashboard() {

  const cardStyle = {
    background: "white",
    color: "#1e293b",
    width: "250px",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    cursor: "pointer",
    textAlign: "center",
    fontWeight: "600"
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "40px"
      }}
    >
      <h1
        style={{
          color: "#1e3a8a",
          marginBottom: "30px"
        }}
      >
        🏥 Hospital Admin Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap"
        }}
      >
        <div style={cardStyle}>
          👨‍⚕️ <br /><br />
          Add Doctor
        </div>

        <div style={cardStyle}>
          🗑️ <br /><br />
          Remove Doctor
        </div>

        <div style={cardStyle}>
          🧑‍🤝‍🧑 <br /><br />
          View Patients
        </div>

        <div style={cardStyle}>
          📅 <br /><br />
          Appointments
        </div>

        <div style={cardStyle}>
          👨‍💼 <br /><br />
          Employees
        </div>

        <div style={cardStyle}>
          📋 <br /><br />
          Reports
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;