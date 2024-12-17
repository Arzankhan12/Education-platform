// import React, { useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../Navbar/Navbas";
// import Footer from "../Footer/Footer";

// function Register() {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     firstName: "",
//     lastName: "",
   
//   });
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();
//   const { email } = location.state || {};
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const { companyName, firstName, lastName } = formData;
//     if (!companyName || !firstName || !lastName) {
//       setMessage("All fields are required.");
//       return;
//     }
  
//     if (!email) {
//       setMessage("Email is missing. Please go back and try again.");
//       return;
//     }
  
//     try {
//       setLoading(true);
//       setMessage("");
//       await axios.post("http://localhost:7000/api/register", {
//         companyName,
//         firstName,
//         lastName,
//         email, // Include email here
//       });
//       setMessage("Registration successful!");
//       navigate("/dashboard");
//     } catch (error) {
//       setMessage(
//         error.response?.data?.message || "Failed to register. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };
  
  

//   return (
//     <>
//       <Navbar />
//       <div className="login-container">
//         <div className="login-card">
//           <div className="login-header">
//             <h1 className="login-title">Register Your Account</h1>
//           </div>
//           <form className="login-form" onSubmit={handleSubmit}>
//             <div className="input-container">
//               <input
//                 type="text"
//                 name="companyName"
//                 className="login-input"
//                 placeholder=""
//                 value={formData.companyName}
//                 onChange={handleInputChange}
//               />
//               <label htmlFor="companyName" className="login-label">
//                 Company Name
//               </label>
//             </div>
//             <div className="input-container">
//               <input
//                 type="text"
//                 name="firstName"
//                 className="login-input"
//                 placeholder=""
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//               />
//               <label htmlFor="firstName" className="login-label">
//                 First Name
//               </label>
//             </div>
//             <div className="input-container">
//               <input
//                 type="text"
//                 name="lastName"
//                 className="login-input"
//                 placeholder=""
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//               />
//               <label htmlFor="lastName" className="login-label">
//                 Last Name
//               </label>
//             </div>
//             <button type="submit" className="login-button" disabled={loading}>
//               {loading ? "Registering..." : "Register"}
//             </button>
//           </form>
//           {message && <p className="login-message">{message}</p>}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Register;
import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbas";
import './Register.css'
import Footer from "../Footer/Footer";

function Register() {
  const [step, setStep] = useState(1); // For tracking steps in the form
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    teachingExperience: "",
    videoProLevel: "",
    audienceReach: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { email } = location.state || {};
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Navigate between steps
  const handleNext = () => {
    if (step === 1 && (!formData.companyName || !formData.firstName || !formData.lastName)) {
      setMessage("Please fill out all fields in this step.");
      return;
    }
    setStep((prevStep) => prevStep + 1);
    setMessage("");
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
    setMessage("");
  };

  // Handle final form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { companyName, firstName, lastName, teachingExperience, videoProLevel, audienceReach } = formData;

    if (!companyName || !firstName || !lastName || !teachingExperience || !videoProLevel || !audienceReach) {
      setMessage("All fields are required.");
      return;
    }

    if (!email) {
      setMessage("Email is missing. Please go back and try again.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      await axios.post("http://localhost:7000/api/register", {
        ...formData,
        email, // Include email here
      });
      setMessage("Registration successful!");
      navigate("/dashboard");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to register. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Register Your Account</h1>
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h2 className="login-title">Step 1: Basic Information</h2>
              <div className="input-container">
                <input
                  type="text"
                  name="companyName"
                  className="login-input"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
                <label htmlFor="companyName" className="login-label">
                  Company Name
                </label>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="firstName"
                  className="login-input"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <label htmlFor="firstName" className="login-label">
                  First Name
                </label>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="lastName"
                  className="login-input"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                <label htmlFor="lastName" className="login-label">
                  Last Name
                </label>
              </div>
              <div className="buttons">
                <button onClick={handleNext} className="login-button">
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h2 className="login-title">Step 2: Teaching Experience</h2>
              <div className="input-container">
                <label htmlFor="teachingExperience" className="login-label">
                  What kind of teaching have you done before?
                </label>
                <select
                  name="teachingExperience"
                  className="login-input"
                  value={formData.teachingExperience}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="informal">In person, informally</option>
                  <option value="professional">In person, professionally</option>
                  <option value="online">Online</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="buttons">
                <button onClick={handleBack} className="login-button">
                  Back
                </button>
                <button onClick={handleNext} className="login-button">
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h2 className="login-title">Step 3: Video Experience</h2>
              <div className="input-container">
                <label htmlFor="videoProLevel" className="login-label">
                  How much of a video "pro" are you?
                </label>
                <select
                  name="videoProLevel"
                  className="login-input"
                  value={formData.videoProLevel}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="beginner">I'm a beginner</option>
                  <option value="knowledge">I have some knowledge</option>
                  <option value="experienced">I'm experienced</option>
                  <option value="ready">I have videos ready to upload</option>
                </select>
              </div>
              <div className="buttons">
                <button onClick={handleBack} className="login-button">
                  Back
                </button>
                <button onClick={handleNext} className="login-button">
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div>
              <h2 className="login-title">Step 4: Audience Reach</h2>
              <div className="input-container">
                <label htmlFor="audienceReach" className="login-label">
                  Do you have an audience to share your course with?
                </label>
                <select
                  name="audienceReach"
                  className="login-input"
                  value={formData.audienceReach}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="none">Not at the moment</option>
                  <option value="small">I have a small following</option>
                  <option value="sizeable">I have a sizeable following</option>
                </select>
              </div>
              <div className="buttons">
                <button onClick={handleBack} className="login-button">
                  Back
                </button>
                <button onClick={handleSubmit} className="login-button" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          )}

          {message && <p className="login-message">{message}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
