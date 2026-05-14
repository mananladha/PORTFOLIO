import { motion } from "framer-motion";

function ProjectsPreview() {

  const projects = [
    {
      title: "360 Campus Tour",
      description:
        "A 360 degree campus tour for The VIT Bhopal like Google Street view",

      tech: "Pendulam • JS ",

      gradient: "from-purple-500/30 to-cyan-500/30",
    },

    {
      title: "Expense-Tracker",
      description:
        "Real-time MERN stack chat application with authentication and live messaging.",

      tech: "Render • Node.js • MongoDB",

      gradient: "from-cyan-500/30 to-purple-500/30",
    },

    {
      title: "Infinte Runner 2D Game",
      description:
        "user-friendly game for children to understand basic mathematics.",

      tech: "Unity Engine • C# • Assets",

      gradient: "from-pink-500/30 to-purple-500/30",
    },
  ];


  return (
    <section className="bg-transparent relative z-10 text-white py-32 px-8 relative overflow-hidden">

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

      
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >

        <h2 className="text-purple-400 text-xl font-semibold mb-4">
          PROJECTS
        </h2>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Featured Work
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Some of the projects I’ve built using modern technologies,
          focusing on performance, scalability, and user experience.
        </p>

      </motion.div>

      {/* Project Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
            className="
            relative
            bg-white/10
            backdrop-blur-2xl
            border border-white/10
            rounded-[32px]
            overflow-hidden
            hover:border-purple-400
            transition duration-300
            hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]
            "
          >

            {/* Image Area */}
            <div
              className={`
              h-56
              bg-gradient-to-br
              ${project.gradient}
              flex items-center justify-center
              `}
            >

              <h2 className="text-3xl font-bold text-white/80">
                Project
              </h2>

            </div>

            {/* Content */}
            <div className="p-8">

              <h2 className="text-2xl font-bold mb-4">
                {project.title}
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="text-purple-400 font-medium mb-8">
                {project.tech}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <button
                  className="
                  bg-gradient-to-r from-purple-500 to-purple-700
                  hover:scale-105
                  transition duration-300
                  px-6 py-3
                  rounded-full
                  font-semibold
                  shadow-[0_0_30px_rgba(168,85,247,0.4)]
                  "
                >
                  Live Demo
                </button>

                <button
                  className="
                  border border-white/20
                  bg-white/5
                  hover:bg-white/10
                  hover:scale-105
                  transition duration-300
                  px-6 py-3
                  rounded-full
                  font-semibold
                  "
                >
                  GitHub
                </button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default ProjectsPreview;