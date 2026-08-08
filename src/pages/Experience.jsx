import { motion } from "framer-motion";
import LineReveal from "../components/LineReveal";

function Experience() {
  const experiences = [
    {
      year: "Sep 2025 - Present",
      title: "Co Lead - Design Team",
      company: "FYI CLUB - VIT BHOPAL",
      description:
        "Leading the design team by managing event branding, social media creatives, posters, and visual identity for club activities.",
    },
    {
      year: "Nov 2024 - Sep 2025",
      title: "Graphic Designer",
      company: "FYI CLUB - VIT BHOPAL",
      description:
        "Designed posters, promotional materials, event assets, and digital creatives for multiple technical and cultural events.",
    },
    {
      year: "Aug 2025 - Present",
      title: "Graphic Designer",
      company: "MHARO RAJASTHAN CLUB",
      description:
        "Creating event branding, social media posts, and promotional graphics for cultural activities and club events.",
    },
  ];

  return (
    <section className="bg-transparent text-white py-32 px-8 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

      <div className="text-center mb-24 relative z-10">
        <LineReveal
          lines={["EXPERIENCE"]}
          className="text-purple-400 text-xl font-semibold mb-4 tracking-[0.2em] font-mono uppercase"
        />

        <LineReveal
          lines={["My Journey"]}
          className="text-5xl font-bold text-white"
        />
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-purple-500/30 transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        <div className="space-y-20">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >

              {/* Card */}
              <div className="w-full md:w-[45%] bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-400 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition duration-300">

                <h3 className="text-purple-400 text-lg font-semibold mb-2">
                  {exp.year}
                </h3>

                <h2 className="text-2xl font-bold mb-4">
                  {exp.title}
                </h2>
                <h2 className="text-2xl font-bold mb-4">
                  {exp.company}
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

              </div>

              {/* Timeline Dot */}
             <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="absolute left-1/2 w-6 h-6
                bg-purple-500 rounded-full border-4 border-[#050816]
                transform -translate-x-1/2"
              />
            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;