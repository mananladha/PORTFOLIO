import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 800);
          }, 200);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-[#03050d] flex flex-col justify-between p-8 md:p-16 overflow-hidden text-white"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none" />

          {/* Noise Texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-soft-light"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/noise.png')",
            }}
          />

          {/* Top Bar */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
              <span className="text-xs uppercase tracking-[0.3em] text-purple-300 font-mono">
                PORTFOLIO V2.0 // 3D
              </span>
            </div>
            <span className="text-xs font-mono text-gray-500">
              SYS.INITIALIZE
            </span>
          </div>

          {/* Main Typography & Progress Counter */}
          <div className="my-auto relative z-10 flex flex-col items-center justify-center text-center">
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-purple-400 text-xs md:text-sm font-mono tracking-[0.4em] uppercase mb-4"
            >
              LOADING EXPERIENCE
            </motion.p>

            {/* Main Name with Letter-Spacing Animation */}
            <motion.h1
              initial={{ letterSpacing: "-0.05em", opacity: 0.4 }}
              animate={{ letterSpacing: "0.15em", opacity: 1 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="text-4xl md:text-7xl lg:text-8xl font-black uppercase bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]"
            >
              MANAN MAHESHWARI
            </motion.h1>

            {/* Progress Percentage */}
            <div className="mt-8 flex items-baseline gap-2 font-mono">
              <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {progress}
              </span>
              <span className="text-xl text-cyan-400 font-light">%</span>
            </div>
          </div>

          {/* Bottom Loading Bar */}
          <div className="relative z-10 max-w-xl mx-auto w-full">
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-gray-400 tracking-widest uppercase">
              <span>R3F ENGINE READY</span>
              <span>3D WORLD LOADING</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
