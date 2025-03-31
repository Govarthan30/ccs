import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: '2rem',
        left: '30%',
        transform: 'translateX(-50%)',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "4rem",
        padding: "0.8rem 2rem",
        backgroundColor: "rgba(17, 24, 39, 0.4)",
        backdropFilter: "blur(20px)",
        borderRadius: "2rem",
        color: "white",
        zIndex: 1000,
        border: "1px solid rgba(96, 165, 250, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        width: "450px",
        margin: "0 auto",
      }}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
        }}
      >
        <div style={{
          width: "2rem",
          height: "2rem",
          background: "linear-gradient(45deg, #60A5FA, #A78BFA)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
          fontWeight: "bold",
          boxShadow: "0 0 20px rgba(96, 165, 250, 0.3)",
        }}>
          C
        </div>
        <motion.h1 
          style={{ 
            fontSize: "1.5rem", 
            fontWeight: "800",
            background: "linear-gradient(45deg, #60A5FA, #A78BFA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.05em",
          }}
        >
          CCS
        </motion.h1>
      </motion.div>

      {/* Navigation Links */}
      <div style={{ 
        display: "flex", 
        flexDirection: "row",
        gap: "3rem",
        alignItems: "center",
      }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "all 0.3s ease",
              padding: "0.6rem 1.2rem",
              borderRadius: "1.2rem",
              position: "relative",
              fontSize: "0.95rem",
              fontWeight: "500",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#60A5FA";
              e.target.style.backgroundColor = "rgba(96, 165, 250, 0.15)";
              e.target.style.boxShadow = "0 0 20px rgba(96, 165, 250, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.backgroundColor = "transparent";
              e.target.style.boxShadow = "none";
            }}
          >
            Home
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/contact"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "all 0.3s ease",
              padding: "0.6rem 1.2rem",
              borderRadius: "1.2rem",
              position: "relative",
              fontSize: "0.95rem",
              fontWeight: "500",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#A78BFA";
              e.target.style.backgroundColor = "rgba(167, 139, 250, 0.15)";
              e.target.style.boxShadow = "0 0 20px rgba(167, 139, 250, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.backgroundColor = "transparent";
              e.target.style.boxShadow = "none";
            }}
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;