import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
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
        Contact Us
      </h2>
      <p
        style={{
          marginTop: "1rem", // Equivalent to mt-4
        }}
      >
        Email: support@argusvpn.com
      </p>
    </motion.section>
  );
};

export default Contact;