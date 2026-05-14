import { motion } from "framer-motion";

function AboutPreview() {
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

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center relative"
        >

          {/* Glow */}
          <div className="absolute w-[420px] h-[420px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-30"></div>

          {/* Floating Ring */}
          <div className="absolute w-[430px] h-[430px] border border-white/10 rounded-full animate-pulse"></div>

          {/* Glass Card */}
          <div
            className="
            relative
            bg-white/10
            backdrop-blur-2xl
            border border-white/10
            p-5
            rounded-[40px]
            shadow-2xl
            "
          >

            <img
              src="/mananimage.jpg"
              alt="Manan"
              className="
              w-[350px]
              md:w-[400px]
              rounded-[30px]
              object-cover
              "
            />

          </div>

        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >

          {/* Heading */}
          <h2 className="text-purple-400 text-xl font-semibold mb-4">
            ABOUT ME
          </h2>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">

            Passionate About
            <br />

            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Building Digital Experiences
            </span>

          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8">

            I'm <span className="text-white font-semibold">Manan Maheshwari</span>,
            a Computer Science Engineering student at VIT Bhopal and a
            passionate Full Stack Developer focused on building scalable,
            visually engaging, and high-performance web applications.

          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-12">

            I enjoy combining creativity with problem-solving to develop
            impactful digital experiences using modern technologies like
            React, Node.js, MongoDB, Python, and Tailwind CSS.

          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">

            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="
              bg-white/10
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-purple-400
              transition duration-300
              "
            >

              <h2 className="text-5xl font-bold text-purple-400 mb-3">
                10+
              </h2>

              <p className="text-gray-300 text-lg">
                Projects Built
              </p>

            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="
              bg-white/10
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
              hover:border-cyan-400
              transition duration-300
              "
            >

              <h2 className="text-5xl font-bold text-cyan-400 mb-3">
                1+
              </h2>

              <p className="text-gray-300 text-lg">
                Years Learning
              </p>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default AboutPreview;