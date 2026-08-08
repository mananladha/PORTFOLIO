import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Connect from "./pages/Connect";

import Scene3D from "./components/3d/Scene3D";
import { useMobile } from "./utils/useMobile";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  const { isMobile, prefersReducedMotion } = useMobile();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  return (
    <div
      onMouseMove={(e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      className="relative min-h-screen overflow-x-hidden bg-[#03050d]"
    >
      {/* CINEMATIC LOADING SCREEN */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* 3D INTERACTIVE CANVAS BACKGROUND */}
      <Scene3D
        scrollProgress={scrollProgress}
        mousePosition={mousePosition}
        isMobile={isMobile}
        prefersReducedMotion={prefersReducedMotion}
      />

      {/* CUSTOM CURSOR */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <div className="w-10 h-10 rounded-full border border-purple-400/60" />
      </motion.div>

      {/* PREMIUM ANIMATED BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Dark Base */}
        <div className="absolute inset-0 bg-[#050816]/90"></div>

        {/* Purple Gradient */}
        <motion.div
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -150, 100, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          top-[-10%]
          left-[-10%]
          w-[900px]
          h-[900px]
          bg-purple-600/15
          rounded-full
          blur-[160px]
          "
        />

        {/* Cyan Gradient */}
        <motion.div
          animate={{
            x: [0, -150, 200, 0],
            y: [0, 120, -80, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          bottom-[-20%]
          right-[-10%]
          w-[1000px]
          h-[1000px]
          bg-cyan-500/15
          rounded-full
          blur-[180px]
          "
        />

        {/* Pink Orb */}
        <motion.div
          animate={{
            x: [0, 100, -200, 0],
            y: [0, -100, 150, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          top-[40%]
          left-[40%]
          w-[400px]
          h-[400px]
          bg-pink-500/10
          rounded-full
          blur-[140px]
          "
        />

        {/* Animated Grid */}
        <motion.div
          animate={{
            backgroundPositionY: ["0px", "80px"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating Tech Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.05, 0.25, 0.05],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="
            absolute
            bg-white/10
            rounded-full
            "
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: "1px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
          />
        ))}

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute
            w-1
            h-1
            bg-cyan-400
            rounded-full
            "
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Noise Texture */}
        <div
          className="
          absolute inset-0
          opacity-[0.02]
          mix-blend-soft-light
          "
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        ></div>
      </div>

      {/* SCROLL PROGRESS BAR */}
      <motion.div
        className="
        fixed
        top-0
        left-0
        right-0
        h-1
        bg-gradient-to-r
        from-purple-500
        via-pink-500
        to-cyan-500
        z-[9999]
        origin-left
        shadow-[0_0_20px_rgba(168,85,247,0.7)]
        "
        style={{
          scaleX: scrollYProgress,
        }}
      />

      {/* Flowing Energy Orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 300, -200, 0],
            y: [0, -150, 100, 0],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          rounded-full
          blur-3xl
          opacity-15
          "
          style={{
            width: `${120 + i * 40}px`,
            height: `${120 + i * 40}px`,
            background:
              i % 2 === 0
                ? "rgba(168,85,247,0.4)"
                : "rgba(34,211,238,0.4)",

            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* WEBSITE */}
      <div className="relative z-10">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
