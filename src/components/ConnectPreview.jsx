import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
emailjs.init("QC0tm7J1LheIuk7J3");
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function ConnectPreview() {
  const form = useRef();
const sendEmail = async (e) => {

  e.preventDefault();

  const templateParams = {
    name: e.target.user_name.value,
    email: e.target.user_email.value,
    message: e.target.message.value,
  };

  try {

    const response = await emailjs.send(
      "service_wrzr9pw",
      "template_p4auzhn",
      templateParams,
      "QC0tm7J1LheIuk7J3"
    );

    console.log(response);

    alert("Message Sent Successfully!");

    e.target.reset();

  } catch (error) {

    console.log(error);

    alert("Failed to send message.");
  }
};
  return (
    <section id="connect" className="bg-transparent text-white py-32 px-8 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
        max-w-7xl mx-auto
        bg-white/10
        backdrop-blur-2xl
        border border-white/10
        rounded-[40px]
        p-10 md:p-16
        relative overflow-hidden
        "
      >

        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

        {/* Heading */}
        <div className="text-center mb-20 relative z-10">

          <h2 className="text-purple-400 text-xl font-semibold mb-4">
            CONNECT
          </h2>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">

            Let's Build
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Something Amazing
            </span>

          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">

            Open to internships, freelance projects, collaborations,
            and exciting opportunities in development and design.

          </p>

        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 relative z-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-bold mb-10">
              Contact Information
            </h2>

            {/* Info Cards */}
            <div className="space-y-6">

              {/* Email */}
              <div
                className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-6
                hover:border-purple-400
                transition duration-300
                "
              >

                <h3 className="text-purple-400 font-semibold mb-2">
                  Email
                </h3>

                <a
                  href="mailto:manan.ladha@gmail.com"
                  className="
                  text-gray-300
                  hover:text-purple-400
                  transition duration-300
                  "
                >
                  manan.ladha@gmail.com
                </a>
              </div>


              {/* Email */}
              <div
                className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-6
                hover:border-purple-400
                transition duration-300
                "
              >

                <h3 className="text-purple-400 font-semibold mb-2">
                  Phone
                </h3>

                <a
                  href="tel:+919413180001"
                  className="
                  text-gray-300
                  hover:text-purple-400
                  hover:underline
                  transition duration-300
                  "
                >
                  +91-9413180001
                </a>
              </div>

              {/* Location */}
              <div
                className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-6
                hover:border-cyan-400
                transition duration-300
                "
              >

                <h3 className="text-purple-400 font-semibold mb-2">
                  Location
                </h3>

                <p className="text-gray-300">
                  India
                </p>

              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10">

              {/* GitHub */}
              <motion.a
                whileHover={{ y: -5 }}
                href="https://github.com/mananladha"
                className="
                bg-white/10
                border border-white/10
                p-5
                rounded-full
                hover:border-purple-400
                transition duration-300
                "
              >
                <FaGithub size={24} />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.linkedin.com/in/maheshwarimanan/"
                className="
                bg-white/10
                border border-white/10
                p-5
                rounded-full
                hover:border-cyan-400
                transition duration-300
                "
              >
                <FaLinkedin size={24} />
              </motion.a>

              {/* Instagram */}
              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.instagram.com/mananladha.01/"
                className="
                bg-white/10
                border border-white/10
                p-5
                rounded-full
                hover:border-pink-400
                transition duration-300
                "
              >
                <FaInstagram size={24} />
              </motion.a>

            </div>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <form ref={form}
              onSubmit={(e) => sendEmail(e)}
              className="space-y-6"
              autoComplete="off">

              {/* Name */}
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="
                w-full
                bg-white/5
                border border-white/10
                rounded-2xl
                px-6 py-5
                outline-none
                focus:border-purple-400
                transition duration-300
                "
              />

              {/* Email */}
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="
                w-full
                bg-white/5
                border border-white/10
                rounded-2xl
                px-6 py-5
                outline-none
                focus:border-purple-400
                transition duration-300
                "
              />

              {/* Message */}
              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                className="
                w-full
                bg-white/5
                border border-white/10
                rounded-2xl
                px-6 py-5
                outline-none
                focus:border-purple-400
                transition duration-300
                "
              ></textarea>

              <button
                  type="submit"
                  className="
                  w-full
                  bg-gradient-to-r
                  from-purple-500
                  to-cyan-500
                  hover:scale-[1.02]
                  transition duration-300
                  py-5
                  rounded-2xl
                  font-semibold
                  shadow-[0_0_40px_rgba(168,85,247,0.4)]
                  "
                >
                  Send Message
                </button>
            </form>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}

export default ConnectPreview;