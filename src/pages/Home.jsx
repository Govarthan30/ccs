import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        padding: "5rem 0", // Equivalent to py-20
        backgroundColor: "#111827", // Dark gray background (bg-gray-900 equivalent)
        color: "white",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: "2.25rem", // Equivalent to text-4xl
          fontWeight: "bold",
        }}
      >
        Secure & Fast VPN
      </motion.h1>
      <p
        style={{
          marginTop: "1rem", // Equivalent to mt-4
          fontSize: "1.125rem", // Equivalent to text-lg
        }}
      >
        Protect your online presence with Argus VPN.
      </p>
      <div
        style={{
          marginTop: "1.5rem", // Equivalent to mt-6
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Get Started Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            backgroundColor: "#2563eb", // Blue-600 equivalent
            color: "white",
            padding: "0.5rem 1rem", // Equivalent to px-6 py-2
            borderRadius: "0.25rem", // Equivalent to rounded
            border: "none",
            cursor: "pointer",
          }}
        >
          Get Started
        </motion.button>

        {/* Sign In Button with Navigation */}
        <Link to="/signin">
          <motion.button
            whileHover={{ scale: 1.1 }}
            style={{
              backgroundColor: "#1f2937", // Gray-800 equivalent
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign In
          </motion.button>
        </Link>

        {/* Sign Up Button with Navigation */}
        <Link to="/signup">
          <motion.button
            whileHover={{ scale: 1.1 }}
            style={{
              backgroundColor: "#2563eb", // Blue-600 equivalent
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign Up
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default Home;