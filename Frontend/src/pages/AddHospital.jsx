import "./AddHospital.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddHospital() {

    const navigate = useNavigate();

const [hospital, setHospital] = useState({
    hospitalName: "",
    registrationNumber: "",
    hospitalType: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    contactNumber: "",
    email: "",
    website: ""
});

    const handleChange = (e) => {

        setHospital({

            ...hospital,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(

                "http://localhost:8080/hospital/add",

                hospital

            );

            alert(response.data.message);

            navigate(
                "/create-hospital-admin",
                {
                    state: {
                        hospitalId: response.data.hospitalId,
                        hospitalName: response.data.hospitalName
                    }
                }
            );

        } catch (error) {

            console.log(error);

            alert("Failed To Add Hospital");

        }

    };

 return (
 <div className="addHospitalPage">

     <div className="addHospitalCard">

         <div className="cardHeader">

             <h1>🏥 Register New Hospital</h1>

             <p>
                 Add a Hospital to HMS Network
             </p>

         </div>

         <form onSubmit={handleSubmit}>

             <div className="formGrid">

                 <div className="formGroup">
                     <label>Hospital Name</label>
                     <input
                         type="text"
                         name="hospitalName"
                         value={hospital.hospitalName}
                         onChange={handleChange}
                         required
                     />
                 </div>

                 <div className="formGroup">
                     <label>Registration Number</label>
                     <input
                         type="text"
                         name="registrationNumber"
                         value={hospital.registrationNumber}
                         onChange={handleChange}
                         required
                     />
                 </div>

                 <div className="formGroup">
                     <label>Hospital Type</label>

                     <select
                         name="hospitalType"
                         value={hospital.hospitalType}
                         onChange={handleChange}
                         required
                     >

                         <option value="">
                             Select Hospital Type
                         </option>

                         <option>
                             Multi Speciality
                         </option>

                         <option>
                             General Hospital
                         </option>

                         <option>
                             Eye Hospital
                         </option>

                         <option>
                             Dental Hospital
                         </option>

                         <option>
                             Cardiac Hospital
                         </option>

                         <option>
                             Orthopedic Hospital
                         </option>

                         <option>
                             Children Hospital
                         </option>

                     </select>

                 </div>

                 <div className="formGroup">
                     <label>Contact Number</label>
                     <input
                         type="text"
                         name="contactNumber"
                         value={hospital.contactNumber}
                         onChange={handleChange}
                         required
                     />
                 </div>

                 <div className="formGroup fullWidth">
                     <label>Address</label>

                     <textarea
                         rows="3"
                         name="address"
                         value={hospital.address}
                         onChange={handleChange}
                         required
                     />

                 </div>

                 <div className="formGroup">
                     <label>City</label>
                     <input
                         type="text"
                         name="city"
                         value={hospital.city}
                         onChange={handleChange}
                         required
                     />
                 </div>

                 <div className="formGroup">
                     <label>State</label>
                     <input
                         type="text"
                         name="state"
                         value={hospital.state}
                         onChange={handleChange}
                         required
                     />
                 </div>

                 <div className="formGroup">
                     <label>Pincode</label>
                     <input
                         type="text"
                         name="pincode"
                         value={hospital.pincode}
                         onChange={handleChange}
                         required
                     />
                 </div>

                 <div className="formGroup">
                     <label>Email</label>
                     <input
                         type="email"
                         name="email"
                         value={hospital.email}
                         onChange={handleChange}
                     />
                 </div>

                 <div className="formGroup fullWidth">
                     <label>Website</label>
                     <input
                         type="text"
                         name="website"
                         value={hospital.website}
                         onChange={handleChange}
                     />
                 </div>

             </div>

             <button className="registerBtn">

                 Register Hospital

             </button>

         </form>

     </div>

 </div>
 );
}
export default AddHospital;