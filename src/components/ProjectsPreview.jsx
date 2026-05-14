import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectsPreview() {

  const projects = [
    {
      title: "360 Campus Tour",

      description:
        "A 360 degree campus tour for VIT Bhopal inspired by Google Street View with immersive navigation experience.",

      tech: "Pendulum • JavaScript • 360° Experience",

      image: "/campus-tour.png",

      live: "https://interactive-360-virtual-tour.netlify.app/",

      github: "https://github.com/mananladha",

      gradient: "from-purple-500/30 to-cyan-500/30",
    },

    {
      title: "Expense Tracker",

      description:
        "Modern expense tracking web application with analytics, clean UI and real-time transaction management.",

      tech: "React • Node.js • MongoDB • Express",

      image: "/expense-tracker.png",

      live: "https://expense-tracker.mananladha.in/",

      github: "https://github.com/mananladha/expense-tracker",

      gradient: "from-cyan-500/30 to-purple-500/30",
    },

    {
      title: "Infinite Runner 2D Game",

      description:
        "Interactive educational game designed for children to learn mathematics in a fun and engaging way.",

      tech: "Unity • C# • Game Development",

      image: "/infinite-runner.png",

      github: "https://github.com/mananladha",

      gradient: "from-pink-500/30 to-purple-500/30",
    },
  ];

  return (

    <section className="bg-transparent text-white py-32 px-8 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >

        <h2 className="text-purple-400 text-xl font-semibold mb-4 tracking-widest">
          PROJECTS
        </h2>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Featured Work
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          A collection of projects built using modern technologies,
          focusing on performance, beautiful UI, scalability,
          and seamless user experiences.
        </p>

      </motion.div>

      {/* Project Grid */}
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
              scale: 1.02,
            }}

            className="
            relative
            bg-white/10
            backdrop-blur-2xl
            border border-white/10
            rounded-[32px]
            overflow-hidden
            hover:border-purple-400
            transition duration-500
            hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]
            group
            "
          >

            {/* Gradient Overlay */}
            <div
              className="
              absolute inset-0
              bg-gradient-to-br
              from-purple-500/5
              to-cyan-500/5
              opacity-0
              group-hover:opacity-100
              transition duration-500
              "
            ></div>

            {/* Project Image */}
            <div
              className={`
              relative
              h-56
              overflow-hidden
              bg-gradient-to-br
              ${project.gradient}
              `}
            >

              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-full
                object-cover
                transition duration-700
                group-hover:scale-110
                "
              />

            </div>

            {/* Content */}
            <div className="relative p-8 z-10">

              <h2 className="text-2xl font-bold mb-4">
                {project.title}
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">

                {project.tech.split(" • ").map((tech, i) => (

                  <span
                    key={i}
                    className="
                    px-3 py-1
                    bg-purple-500/10
                    border border-purple-400/20
                    text-purple-300
                    rounded-full
                    text-sm
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                {/* Live Demo */}
                {project.live && (

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex items-center gap-2
                    bg-gradient-to-r
                    from-purple-500
                    to-cyan-500
                    hover:scale-105
                    transition duration-300
                    px-6 py-3
                    rounded-full
                    font-semibold
                    shadow-[0_0_30px_rgba(168,85,247,0.4)]
                    "
                  >

                    <FiExternalLink />

                    Live Demo

                  </a>

                )}

                {/* GitHub */}
                {project.github && (

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex items-center gap-2
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

                    <FaGithub />

                    GitHub

                  </a>

                )}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default ProjectsPreview;