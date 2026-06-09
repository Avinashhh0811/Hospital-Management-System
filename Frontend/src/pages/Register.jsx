import "./Register.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
   const [timer, setTimer] = useState(0);

   useEffect(() => {

     let interval;

     if (timer > 0) {

       interval = setInterval(() => {

         setTimer((prev) => prev - 1);

       }, 1000);

     }

     return () => clearInterval(interval);

   }, [timer]);

  const navigate = useNavigate();

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [age, setAge] =
    useState("");

  const [gender, setGender] =
    useState("");

  const [bloodGroup, setBloodGroup] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [otpSent, setOtpSent] =
    useState(false);

  /* SEND OTP */
const sendOtp = async () => {

  if (!fullName.trim()) {
    alert("Full Name is required");
    return;
  }

  if (!email.trim()) {
    alert("Email is required");
    return;
  }

  if (!phone.trim()) {
    alert("Phone Number is required");
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Enter valid 10 digit phone number");
    return;
  }

  if (!age) {
    alert("Age is required");
    return;
  }

  if (age < 1 || age > 120) {
    alert("Enter valid age");
    return;
  }

  if (!gender) {
    alert("Gender is required");
    return;
  }

  if (!bloodGroup) {
    alert("Blood Group is required");
    return;
  }

  if (!address.trim()) {
    alert("Address is required");
    return;
  }

  if (!password.trim()) {
    alert("Password is required");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match ❌");
    return;
  }

  try {

    await axios.post(
      "http://localhost:8080/api/auth/send-otp",
      {
        email: email
      }
    );

    alert("OTP Sent Successfully 📩");

    setOtpSent(true);

    setTimer(30);

  } catch (error) {

    console.log(error);

    alert("Failed To Send OTP ❌");
  }
};

  /* REGISTER */

  /* REGISTER */

  const handleRegister = async () => {

      if (!otp.trim()) {
        alert("Please Enter OTP");
        return;
      }

    try {

      const response = await axios.post(

        "http://localhost:8080/api/auth/verify-register",

        {

          fullName: fullName,

          email: email,

          phone: phone,

          age: age,

          gender: gender,

          bloodGroup: bloodGroup,

          address: address,

          password: password,

          role: "ROLE_PATIENT",

          otp: otp
        }
      );

      if(response.data === "Registration Successful"){

        alert(
          "Registration Successful ✅"
        );

        navigate("/login");
      }

      else{

        alert(response.data);
      }

    }

    catch(error){

       console.log(error);

       alert(
          error.response?.data ||
          "Registration Failed ❌"
       );
    }
  };

  return (

    <div className="loginPage">

      <div className="bgAnimation"></div>

      <div className="loginContainer">

        <div className="registerCard">

          <h1>
            Create Account
          </h1>

          <p>
            HMS Registration Portal
          </p>

          {

            !otpSent ? (

              <>

                <div className="formGrid">

                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e)=>
                      setFullName(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e)=>
                      setEmail(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e)=>
                      setPhone(
                        e.target.value
                      )
                    }
                  />

                  <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e)=>
                      setAge(
                        e.target.value
                      )
                    }
                  />

                  {/* GENDER */}

                  <div className="selectWrapper">

                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">
                        Select Gender
                      </option>

                      <option value="Male">
                        Male
                      </option>

                      <option value="Female">
                        Female
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* BLOOD GROUP */}

                  <div className="selectWrapper">

                    <select
                      value={bloodGroup}
                      onChange={(e)=>
                        setBloodGroup(
                          e.target.value
                        )
                      }
                    >
                      <option value="">
                            Select Blood Group
                      </option>

                      <option value="A+">
                        A+
                      </option>

                      <option value="A-">
                        A-
                      </option>

                      <option value="B+">
                        B+
                      </option>

                      <option value="B-">
                        B-
                      </option>

                      <option value="O+">
                        O+
                      </option>

                      <option value="O-">
                        O-
                      </option>

                      <option value="AB+">
                        AB+
                      </option>

                      <option value="AB-">
                        AB-
                      </option>

                    </select>

                  </div>

                </div>

                <textarea
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e)=>
                    setAddress(
                      e.target.value
                    )
                  }
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>
                    setPassword(
                      e.target.value
                    )
                  }
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e)=>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                />

                <button
                  onClick={sendOtp}
                >
                  Send OTP
                </button>

              </>

            ) : (

              <div className="otpContainer">

                <h2>
                  Verify OTP
                </h2>

                <p>
                  OTP sent to your email
                </p>

                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e)=>
                    setOtp(
                      e.target.value
                    )
                  }
                />

                <button
                  onClick={
                    handleRegister
                  }
                >
                  Verify & Register
                </button>

                {timer > 0 ? (

                  <p
                    style={{
                      marginTop: "10px",
                      color: "#ccc"
                    }}
                  >
                    Resend OTP in {timer}s
                  </p>

                ) : (

                  <button
                    onClick={sendOtp}
                    style={{
                      marginTop: "10px",
                      background: "transparent",
                      border: "none",
                      color: "#7aa2ff",
                      cursor: "pointer"
                    }}
                  >
                    Resend OTP
                  </button>

                )}

              </div>
            )
          }

          <div className="registerText">

            Already Have Account?

            <span
              onClick={()=>
                navigate("/login")
              }
            >
              Login
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;