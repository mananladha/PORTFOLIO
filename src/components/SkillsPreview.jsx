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
  <div className="w-full bg-transparent relative z-10 text-white py-32 px-8 relative overflow-hidden">

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

    <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

    {/* Heading */}
    <div className="text-center mb-20">

      <h2 className="text-purple-400 text-xl font-semibold mb-4">
        MY SKILLS
      </h2>

      <h1 className="text-5xl font-bold">
        Technologies I Work With
      </h1>

    </div>

    {/* Skills Grid */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

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

  </div>
);
}

export default SkillsPreview;