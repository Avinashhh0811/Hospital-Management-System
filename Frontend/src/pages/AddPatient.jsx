import { useState } from "react";

import API from "../services/api";

function AddPatient() {

    const [patientName, setPatientName] = useState("");

    const [age, setAge] = useState("");

    const [gender, setGender] = useState("");

    const [bloodGroup, setBloodGroup] = useState("");

    const [address, setAddress] = useState("");

    const [phone, setPhone] = useState("");

    const [userId, setUserId] = useState("");

    const handleAddPatient = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post(
                "/patient/add",
                {
                    patientName,
                    age,
                    gender,
                    bloodGroup,
                    address,
                    phone,
                    userId
                }
            );

            console.log(response.data);

            alert("Patient Added Successfully");

        } catch(error) {

            console.log(error);

            alert("Failed To Add Patient");
        }
    };

    return (

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "#f2f2f2"
        }}>

            <form
                onSubmit={handleAddPatient}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "350px",
                    gap: "15px",
                    padding: "30px",
                    background: "white",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 10px gray"
                }}>

                <h1 style={{
                    textAlign: "center"
                }}>

                    Add Patient

                </h1>

                <input
                    type="text"
                    placeholder="Patient Name"
                    value={patientName}
                    onChange={(e)=>
                        setPatientName(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e)=>
                        setAge(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Gender"
                    value={gender}
                    onChange={(e)=>
                        setGender(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Blood Group"
                    value={bloodGroup}
                    onChange={(e)=>
                        setBloodGroup(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e)=>
                        setAddress(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e)=>
                        setPhone(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e)=>
                        setUserId(e.target.value)}
                />

                <button
                    type="submit"
                    style={{
                        padding: "12px",
                        background: "green",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>

                    Save Patient

                </button>

            </form>

        </div>
    );
}

export default AddPatient;