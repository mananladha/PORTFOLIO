import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.15,
    },
  },
};

const charVariants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.77, 0, 0.175, 1], // GSAP power4 ease
    },
  },
};

function Hero() {
  const [animKey, setAnimKey] = useState(0);

  return (
    <section id="home" className="min-h-screen bg-transparent relative z-10 text-white flex items-center pt-28 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* LEFT CONTENT - HIGH IMPACT TYPOGRAPHY */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-7/12 z-10"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-purple-500/30 bg-white/5 backdrop-blur-xl mb-8">
            <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-purple-300 font-mono text-xs md:text-sm tracking-[0.25em] uppercase font-semibold">
              FULL STACK DEVELOPER
            </span>
          </div>

          {/* High-Impact Name Typography with SplitText Character Animation */}
          <div className="mb-8 cursor-pointer select-none max-w-full" onClick={() => setAnimKey(prev => prev + 1)}>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] uppercase overflow-hidden">
              <motion.span
                key={`first-${animKey}`}
                className="flex flex-wrap text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {"MANAN".split("").map((char, index) => (
                  <motion.span key={index} variants={charVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                key={`last-${animKey}`}
                className="flex flex-wrap bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.4)]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {"MAHESHWARI".split("").map((char, index) => (
                  <motion.span key={index} variants={charVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>
          </div>

          {/* Subheading & Bio */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-light">
            Hi, I'm <span className="text-white font-semibold">Manan Maheshwari</span> —
            a Computer Science Engineer and Full Stack Developer crafting scalable,
            high-performance web applications and interactive 3D digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5">
            <Link to="/projects">
              <button
                className="
                bg-gradient-to-r from-purple-500 via-purple-600 to-cyan-500
                hover:scale-105
                transition-all duration-300
                px-8 py-4
                rounded-full
                font-semibold
                text-white
                shadow-[0_0_40px_rgba(168,85,247,0.5)]
                border border-purple-400/30
                "
              >
                View Projects
              </button>
            </Link>
            <Link to="/connect">
              <button
                className="
                border border-white/20
                bg-white/5
                backdrop-blur-xl
                hover:bg-white/10
                hover:border-purple-400/50
                hover:scale-105
                transition-all duration-300
                px-8 py-4
                rounded-full
                font-semibold
                text-gray-200
                "
              >
                Contact Me
              </button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT 3D FOCUS SPACE */}
        <div className="lg:w-5/12 min-h-[380px] lg:min-h-[500px] w-full flex items-center justify-center relative pointer-events-none">
          {/* Subtle Ambient Halo */}
          <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
