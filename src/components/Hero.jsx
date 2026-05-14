import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen bg-transparent relative z-10 text-white relative overflow-hidden flex items-center">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

    
      

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-8 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-20"
      >

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 z-10">

          {/* Tag */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-purple-500/30 bg-white/5 backdrop-blur-xl mb-8">

            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>

            <span className="text-purple-300 font-medium tracking-wide">
              FULL STACK DEVELOPER
            </span>

          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8">

            Building
            <br />

            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Digital
            </span>

            <br />

            Experiences

          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">

            Hi, I'm <span className="text-white font-semibold">Manan Maheshwari</span> —
            a Full Stack Developer passionate about building scalable,
            high-performance web applications with modern technologies.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6">
            <Link to="/projects">
            <button
              className="
              bg-gradient-to-r from-purple-500 to-purple-700
              hover:scale-105
              transition duration-300
              px-8 py-4
              rounded-full
              font-semibold
              shadow-[0_0_40px_rgba(168,85,247,0.5)]
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
              hover:scale-105
              transition duration-300
              px-8 py-4
              rounded-full
              font-semibold
              "
            >
              Contact Me
            </button>
            </Link>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-1/2 flex justify-center relative">

          {/* Outer Glow */}
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
              src="/src/assets/mananimage.jpg"
              alt="Manan"
              className="
              w-[350px]
              md:w-[400px]
              rounded-[30px]
              object-cover
              "
            />

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;