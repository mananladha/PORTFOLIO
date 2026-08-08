import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.05,
    },
  },
};

const lineVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    rotateX: -45,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1.0], // GSAP power3 ease
    },
  },
};

export default function LineReveal({ lines, className = "", style = {} }) {
  const lineArray = Array.isArray(lines) ? lines : [lines];

  return (
    <motion.div
      className={className}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        ...style,
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {lineArray.map((line, idx) => (
        <motion.div
          key={idx}
          variants={lineVariants}
          className="block transform-gpu"
          style={{
            transformOrigin: "center bottom",
            backfaceVisibility: "hidden",
          }}
        >
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
}
