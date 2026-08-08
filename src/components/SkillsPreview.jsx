import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

import { motion } from "framer-motion";
import LineReveal from "./LineReveal";

function SkillsPreview() {
  const skills = [
    {
      name: "React",
      icon: <FaReact size={50} />,
    },

    {
      name: "Node.js",
      icon: <FaNodeJs size={50} />,
    },

    {
      name: "MongoDB",
      icon: <SiMongodb size={50} />,
    },

    {
      name: "Express.js",
      icon: <SiExpress size={50} />,
    },

    {
      name: "JavaScript",
      icon: <SiJavascript size={50} />,
    },

    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={50} />,
    },

    {
      name: "Python",
      icon: <FaPython size={50} />,
    },

    {
      name: "Java",
      icon: <FaJava size={50} />,
    },

    {
      name: "MySQL",
      icon: <SiMysql size={50} />,
    },

    {
      name: "Git",
      icon: <FaGitAlt size={50} />,
    },
  ];

  return (
  <section id="skills" className="w-full bg-transparent relative z-10 text-white py-32 px-8 relative overflow-hidden">

    {/* Glow Effects */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
        absolute top-20 left-20
        w-72 h-72
        bg-purple-500
        rounded-full
        blur-3xl
        opacity-20
        "
      ></motion.div>

    <div className="text-center mb-16 relative z-10">
      <LineReveal
        lines={["SKILLS"]}
        className="text-purple-400 text-lg tracking-[0.35em] uppercase mb-4 font-mono font-semibold"
      />

      <LineReveal
        lines={["Crafting Digital", "Experiences"]}
        className="text-5xl md:text-6xl font-bold leading-tight text-white"
      />

      <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
        Modern technologies I use to build fast, scalable and beautiful applications.
      </p>
    </div>

    {/* Skills Grid */}
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">

      {skills.map((skill, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="
          bg-white/10 backdrop-blur-xl border border-white/10
          rounded-3xl p-8 flex flex-col items-center justify-center
          hover:scale-105 hover:border-purple-400
          transition duration-300 shadow-lg
          "
        >

          <div className="text-purple-400 mb-6">
            {skill.icon}
          </div>

          <h3 className="text-xl font-semibold">
            {skill.name}
          </h3>

        </motion.div>

      ))}

    </div>

  </section>
);
}

export default SkillsPreview;