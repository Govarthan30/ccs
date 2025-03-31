import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    { name: "Basic", price: "$5/month" },
    { name: "Pro", price: "$10/month" },
    { name: "Ultimate", price: "$20/month" },
  ];

  return (
    <motion.section
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "5rem 0", // Equivalent to py-20
        backgroundColor: "#111827", // Dark gray background (bg-gray-900 equivalent)
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
        Pricing
      </h2>
      <div
        style={{
          marginTop: "1.5rem", // Equivalent to mt-6
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem", // Equivalent to space-x-6
        }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            style={{
              padding: "1.5rem", // Equivalent to p-6
              backgroundColor: "#1f2937", // Gray-800 equivalent
              borderRadius: "0.5rem", // Equivalent to rounded
              color: "white",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem", // Equivalent to text-xl
                fontWeight: "bold",
              }}
            >
              {plan.name}
            </h3>
            <p
              style={{
                marginTop: "0.5rem", // Equivalent to mt-2
              }}
            >
              {plan.price}
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              style={{
                marginTop: "1rem", // Equivalent to mt-4
                backgroundColor: "#2563eb", // Blue-600 equivalent
                color: "white",
                padding: "0.5rem 1rem", // Equivalent to px-4 py-2
                borderRadius: "0.25rem", // Equivalent to rounded
                border: "none",
                cursor: "pointer",
              }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Pricing;