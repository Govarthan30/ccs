import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    "High-speed Servers",
    "No-Log Policy",
    "Unlimited Bandwidth",
    "AES-256 Encryption",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        padding: "5rem 0", // Equivalent to py-20
        backgroundColor: "#1f2937", // Gray-800 equivalent
        color: "white",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "1.875rem", // Equivalent to text-3xl
          fontWeight: "bold",
        }}
      >
        Features
      </h2>
      <div
        style={{
          marginTop: "1.5rem", // Equivalent to mt-6
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive grid
          gap: "1.5rem", // Equivalent to gap-6
          maxWidth: "64rem", // Equivalent to max-w-4xl
          margin: "0 auto", // Center the container
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              padding: "1rem", // Equivalent to p-4
              backgroundColor: "#374151", // Gray-700 equivalent
              borderRadius: "0.5rem", // Equivalent to rounded
              color: "white",
            }}
          >
            {feature}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Features;