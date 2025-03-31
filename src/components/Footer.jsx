import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Gradient */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Additional Gradient Effects */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, transparent 70%)",
            top: "30%",
            right: "-20%",
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Decorative Lines */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
            style={{ top: "20%" }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg blur-xl" />
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">
              Argus VPN
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed relative">
              Advanced cybersecurity solutions for modern enterprises. Protecting your digital assets with cutting-edge technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg blur-xl" />
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Contact"].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  className="group relative"
                >
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center relative"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg blur-xl" />
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Services
            </h4>
            <ul className="space-y-2">
              {["Penetration Testing", "Threat Intelligence", "Security Consulting", "Incident Response"].map((service) => (
                <motion.li
                  key={service}
                  whileHover={{ x: 5 }}
                  className="group relative"
                >
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center relative">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">
                      {service}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                    </span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg blur-xl" />
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <motion.li 
                className="text-gray-300 flex items-center group"
                whileHover={{ x: 5 }}
              >
                <span className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  📧
                </span>
                <span className="relative">
                  contact@argusvpn.com
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </span>
              </motion.li>
              <motion.li 
                className="text-gray-300 flex items-center group"
                whileHover={{ x: 5 }}
              >
                <span className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  📱
                </span>
                <span className="relative">
                  +1 (555) 123-4567
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </span>
              </motion.li>
              <motion.li 
                className="text-gray-300 flex items-center group"
                whileHover={{ x: 5 }}
              >
                <span className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  📍
                </span>
                <span className="relative">
                  123 Security Ave, Cyber City
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-700/50 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent blur-xl" />
          <div className="relative flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Argus VPN. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;