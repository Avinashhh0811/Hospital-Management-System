import { useState } from "react";
import axios from "axios";

function AddHospital() {

    const [hospital, setHospital] = useState({

        hospitalName:"",
        address:"",
        city:"",
        contactNumber:""

    });

    const handleChange = (e) => {
        setHospital({
            ...hospital,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {

        e.preventDefault();

        try{

            await axios.post(
                "http://localhost:8080/hospital/add",
                hospital
            );

            alert("Hospital Added Successfully");

        }catch(error){
            console.log(error);
        }
    };

    return (
        <div style={{padding:"40px"}}>

            <h1>Add Hospital</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="hospitalName"
                    placeholder="Hospital Name"
                    onChange={handleChange}
                />

                <br/><br/>

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}
                />

                <br/><br/>

                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                />

                <br/><br/>

                <input
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    onChange={handleChange}
                />

                <br/><br/>

                <br/><br/>

                <button type="submit">
                    Add Hospital
                </button>

            </form>

        </div>
    );
}

export default AddHospital;