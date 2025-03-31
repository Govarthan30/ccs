import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const SignIn = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Simulate a successful sign-in process
    console.log("Signing in...");
    // Redirect to the Home page ("/") after sign-in
    navigate("/");
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
      <h2
        style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
        }}
      >
        Sign In
      </h2>
      <form
        onSubmit={handleSubmit} // Attach the handleSubmit function to the form's onSubmit event
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
            type="email"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.25rem",
              border: "none",
            }}
            required // Ensure the field is filled
          />
        </div>
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "0.25rem",
              border: "none",
            }}
            required // Ensure the field is filled
          />
        </div>
        <button
          type="submit" // Make the button submit the form
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;