import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [splineError, setSplineError] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  const handleSplineLoad = () => {
    console.log("Spline loaded successfully");
    setIsLoading(false);
  };

  const handleSplineError = (error) => {
    console.error("Spline error:", error);
    setSplineError(true);
    setIsLoading(false);
  };

  // Check if WebGL is supported
  const checkWebGLSupport = () => {
    try {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch {
      return false;
    }
  };

  const webGLSupported = checkWebGLSupport();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section with Spline Background */}
      <section className="relative min-h-[100vh] h-auto py-20 md:py-0 flex items-center justify-center overflow-hidden">
        {/* Top Left Corner Effects */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px]">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
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
            <motion.div
              className="absolute top-0 left-0 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Animated Lines */}
          <motion.div
            className="absolute top-0 left-0 w-[300px] md:w-[400px] h-[2px] bg-gradient-to-r from-blue-500/50 to-purple-500/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-0 left-0 w-[2px] h-[300px] md:h-[400px] bg-gradient-to-b from-blue-500/50 to-purple-500/50"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-20 w-4 h-4 bg-blue-500/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-32 left-32 w-3 h-3 bg-purple-500/20 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 left-40 w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Base Background with Enhanced Gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, rgba(17,24,39,0.85) 0%, rgba(17,24,39,0.7) 100%),
              radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.2) 0%, rgba(167, 139, 250, 0.2) 100%)
            `,
          }}
        />

        {/* Spline Background with Enhanced Implementation */}
        {webGLSupported && !splineError ? (
          <div className="absolute inset-0 z-0">
            <Spline
              scene="https://prod.spline.design/cpcZdTIzebUBuZsv/scene.splinecode"
              onLoad={handleSplineLoad}
              onError={handleSplineError}
              style={{ 
                opacity: isLoading ? 0 : 0.7,
                transition: 'opacity 0.8s ease-in-out',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1.5)',
                filter: 'blur(0.3px)',
                pointerEvents: 'none',
              }}
            />
            {/* Spline Overlay Gradient */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at center, transparent 0%, rgba(17,24,39,0.4) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-blue-900/40" />
        )}

        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[800px] h-[800px] rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(96, 165, 250, ${0.15 + i * 0.05}) 0%, transparent 70%)`,
                top: `${20 + i * 15}%`,
                left: `${20 + i * 15}%`,
                filter: 'blur(60px)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Loading Overlay with Enhanced Style */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-gray-900/95 backdrop-blur-xl z-50"
            >
              <div className="relative">
                <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-blue-500 text-xl font-medium tracking-wider">Loading 3D Scene...</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Hero Content with Better Z-Indexing and Glass Effect */}
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-blue-400 text-xl font-medium tracking-wider bg-blue-500/10 px-6 py-2 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300 cursor-default relative overflow-hidden group">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Welcome to
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-8 relative"
          >
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x">
                Covert Cyber Sec
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed relative group"
          >
            <span className="relative inline-block">
              Advanced Cybersecurity Solutions for Modern Enterprises
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              />
            </span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(96,165,250,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                  Get Started
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(167,139,250,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white/10 text-white rounded-full font-medium text-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                  Learn More
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          padding: "6rem 0",
          background: "linear-gradient(180deg, #111827 0%, #1F2937 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'inline-block',
            padding: '0.5rem 2rem',
            background: 'rgba(96, 165, 250, 0.1)',
            borderRadius: '2rem',
            marginBottom: '2rem',
            border: '1px solid rgba(96, 165, 250, 0.2)',
          }}
        >
          <span style={{
            fontSize: '1.1rem',
            color: '#60A5FA',
            fontWeight: '500',
            letterSpacing: '0.1em',
          }}>
            Our Services
          </span>
        </motion.div>

        <h2 style={{ 
          fontSize: "3rem", 
          fontWeight: "700", 
          marginBottom: "4rem",
          background: "linear-gradient(45deg, #60A5FA, #A78BFA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Comprehensive Security Solutions
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
          padding: "0 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          {[
            {
              title: "Penetration Testing",
              description: "Comprehensive security assessments to identify vulnerabilities in your systems.",
              icon: "🔍",
              color: "#60A5FA"
            },
            {
              title: "Threat Intelligence",
              description: "Advanced threat detection and analysis to protect against emerging cyber threats.",
              icon: "🛡️",
              color: "#A78BFA"
            },
            {
              title: "Security Consulting",
              description: "Expert guidance to strengthen your organization's security posture.",
              icon: "💡",
              color: "#60A5FA"
            },
            {
              title: "Incident Response",
              description: "24/7 support and rapid response to security incidents and breaches.",
              icon: "🚨",
              color: "#A78BFA"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              style={{
                padding: "2.5rem",
                background: "rgba(31,41,55,0.5)",
                borderRadius: "1.5rem",
                backdropFilter: "blur(10px)",
                border: `1px solid ${service.color}40`,
                boxShadow: hoveredService === index ? `0 0 30px ${service.color}40` : "none",
                transition: "all 0.3s ease",
              }}
            >
              <motion.div 
                style={{ 
                  fontSize: "3rem", 
                  marginBottom: "1.5rem",
                  transform: hoveredService === index ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.3s ease",
                }}
              >
                {service.icon}
              </motion.div>
              <h3 style={{ 
                fontSize: "1.5rem", 
                fontWeight: "600", 
                marginBottom: "1rem",
                color: service.color,
              }}>
                {service.title}
              </h3>
              <p style={{ 
                color: "#E5E7EB",
                lineHeight: "1.6",
              }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          padding: "6rem 0",
          background: "linear-gradient(180deg, #1F2937 0%, #111827 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'inline-block',
            padding: '0.5rem 2rem',
            background: 'rgba(167, 139, 250, 0.1)',
            borderRadius: '2rem',
            marginBottom: '2rem',
            border: '1px solid rgba(167, 139, 250, 0.2)',
          }}
        >
          <span style={{
            fontSize: '1.1rem',
            color: '#A78BFA',
            fontWeight: '500',
            letterSpacing: '0.1em',
          }}>
            Why Choose Us
          </span>
        </motion.div>

        <h2 style={{ 
          fontSize: "3rem", 
          fontWeight: "700", 
          marginBottom: "4rem",
          background: "linear-gradient(45deg, #60A5FA, #A78BFA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Your Trusted Security Partner
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
          padding: "0 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          {[
            {
              title: "Expert Team",
              description: "Our team consists of certified cybersecurity professionals with years of industry experience.",
              icon: "👥",
              color: "#60A5FA"
            },
            {
              title: "Proven Track Record",
              description: "Successfully protected hundreds of businesses from cyber threats and data breaches.",
              icon: "🏆",
              color: "#A78BFA"
            },
            {
              title: "Custom Solutions",
              description: "Tailored security solutions designed to meet your specific business needs.",
              icon: "⚙️",
              color: "#60A5FA"
            },
            {
              title: "24/7 Monitoring",
              description: "Round-the-clock security monitoring and incident response capabilities.",
              icon: "🔍",
              color: "#A78BFA"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              style={{
                padding: "2.5rem",
                background: "rgba(31,41,55,0.5)",
                borderRadius: "1.5rem",
                backdropFilter: "blur(10px)",
                border: `1px solid ${feature.color}40`,
                boxShadow: hoveredService === index ? `0 0 30px ${feature.color}40` : "none",
                transition: "all 0.3s ease",
              }}
            >
              <motion.div 
                style={{ 
                  fontSize: "3rem", 
                  marginBottom: "1.5rem",
                  transform: hoveredService === index ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.3s ease",
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 style={{ 
                fontSize: "1.5rem", 
                fontWeight: "600", 
                marginBottom: "1rem",
                color: feature.color,
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                color: "#E5E7EB",
                lineHeight: "1.6",
              }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          padding: "6rem 0",
          background: "linear-gradient(180deg, #111827 0%, #1F2937 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'inline-block',
            padding: '0.5rem 2rem',
            background: 'rgba(96, 165, 250, 0.1)',
            borderRadius: '2rem',
            marginBottom: '2rem',
            border: '1px solid rgba(96, 165, 250, 0.2)',
          }}
        >
          <span style={{
            fontSize: '1.1rem',
            color: '#60A5FA',
            fontWeight: '500',
            letterSpacing: '0.1em',
          }}>
            Our Process
          </span>
        </motion.div>

        <h2 style={{ 
          fontSize: "3rem", 
          fontWeight: "700", 
          marginBottom: "4rem",
          background: "linear-gradient(45deg, #60A5FA, #A78BFA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          How We Work
        </h2>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 2rem",
        }}>
          {[
            {
              step: "1",
              title: "Initial Assessment",
              description: "We conduct a comprehensive evaluation of your current security posture and identify potential vulnerabilities.",
              color: "#60A5FA"
            },
            {
              step: "2",
              title: "Strategy Development",
              description: "Our team creates a customized security strategy aligned with your business objectives.",
              color: "#A78BFA"
            },
            {
              step: "3",
              title: "Implementation",
              description: "We deploy the necessary security measures and integrate them with your existing systems.",
              color: "#60A5FA"
            },
            {
              step: "4",
              title: "Continuous Monitoring",
              description: "Regular security assessments and updates to ensure ongoing protection against emerging threats.",
              color: "#A78BFA"
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                padding: "2rem",
                background: "rgba(31,41,55,0.5)",
                borderRadius: "1.5rem",
                backdropFilter: "blur(10px)",
                border: `1px solid ${step.color}40`,
                boxShadow: `0 4px 20px ${step.color}20`,
                transition: "all 0.3s ease",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  background: `linear-gradient(45deg, ${step.color}, ${step.color}80)`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  boxShadow: `0 0 20px ${step.color}40`,
                }}
              >
                {step.step}
              </motion.div>
              <div style={{ textAlign: "left" }}>
                <h3 style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "600", 
                  marginBottom: "0.5rem",
                  color: step.color,
                }}>
                  {step.title}
                </h3>
                <p style={{ 
                  color: "#E5E7EB",
                  lineHeight: "1.6",
                }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          padding: "6rem 0",
          background: "linear-gradient(45deg, rgba(59,130,246,0.1), rgba(167,139,250,0.1))",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'inline-block',
            padding: '0.5rem 2rem',
            background: 'rgba(96, 165, 250, 0.1)',
            borderRadius: '2rem',
            marginBottom: '2rem',
            border: '1px solid rgba(96, 165, 250, 0.2)',
          }}
        >
          <span style={{
            fontSize: '1.1rem',
            color: '#60A5FA',
            fontWeight: '500',
            letterSpacing: '0.1em',
          }}>
            Get Started Today
          </span>
        </motion.div>

        <h2 style={{ 
          fontSize: "3rem", 
          fontWeight: "700", 
          marginBottom: "1.5rem",
          background: "linear-gradient(45deg, #60A5FA, #A78BFA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Ready to Secure Your Business?
        </h2>
        <p style={{ 
          fontSize: "1.25rem", 
          color: "#E5E7EB",
          maxWidth: "600px",
          margin: "0 auto 3rem",
          lineHeight: "1.6",
        }}>
          Partner with CCS to protect your digital assets and maintain a strong security posture.
        </p>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(96,165,250,0.5)" }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "#3B82F6",
              color: "white",
              padding: "1.2rem 3rem",
              borderRadius: "1rem",
              border: "none",
              cursor: "pointer",
              fontSize: "1.1rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
            }}
          >
            Contact Us
          </motion.button>
        </Link>
      </motion.section>
    </div>
  );
};

export default Home;