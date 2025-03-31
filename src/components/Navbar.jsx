import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem",
        backgroundColor: "#1f2937", // Dark gray background
        color: "white",
      }}
    >
      {/* Logo */}
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Argus VPN</h1>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#9ca3af")} // Light gray on hover
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Home
        </Link>
        <Link
          to="/features"
          style={{
            color: "white",
            textDecoration: "none",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#9ca3af")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Features
        </Link>
        <Link
          to="/pricing"
          style={{
            color: "white",
            textDecoration: "none",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#9ca3af")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Pricing
        </Link>
        <Link
          to="/contact"
          style={{
            color: "white",
            textDecoration: "none",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#9ca3af")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Contact
        </Link>
      </div>

      {/* Sign In and Sign Up Buttons */}
      <div style={{ display: "flex", gap: "1rem" }}>
        {/* Sign In Button */}
        <Link to="/signin">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              backgroundColor: "#1f2937", // Gray button
              color: "white",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "0.25rem",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
          >
            Sign In
          </motion.button>
        </Link>

        {/* Sign Up Button */}
        <Link to="/signup">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              backgroundColor: "#2563eb", // Blue button
              color: "white",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "0.25rem",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
          >
            Sign Up
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;