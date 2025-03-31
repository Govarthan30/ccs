import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Step 1: Sign Up, Step 2: OTP Verification
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Sign Up form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up...", formData);
    // Simulate sending OTP to the user's email
    alert(`OTP sent to ${formData.email}`);
    setStep(2); // Move to OTP verification step
  };

  // Handle OTP verification
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log("Verifying OTP...", otp);
    // Accept any OTP (no validation)
    alert("OTP verified successfully!");
    navigate("/signin"); // Redirect to Sign In page after successful verification
  };

  return (
    <div
      style={{
        padding: "5rem 0",
        backgroundColor: "#111827", // Dark gray background
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Step 1: Sign Up Form */}
      {step === 1 && (
        <>
          <h2
            style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{
              marginTop: "2rem",
              maxWidth: "30rem",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                marginBottom: "1rem",
              }}
            >
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                  border: "none",
                }}
                required
              />
            </div>
            <div
              style={{
                marginBottom: "1rem",
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                  border: "none",
                }}
                required
              />
            </div>
            <div
              style={{
                marginBottom: "1rem",
              }}
            >
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                  border: "none",
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
          </form>
        </>
      )}

      {/* Step 2: OTP Verification */}
      {step === 2 && (
        <>
          <h2
            style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
            }}
          >
            OTP Verification
          </h2>
          <p>Please check your email and enter the OTP below:</p>
          <form
            onSubmit={handleOtpSubmit}
            style={{
              marginTop: "2rem",
              maxWidth: "30rem",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                marginBottom: "1rem",
              }}
            >
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                  border: "none",
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              Verify OTP
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default SignUp;