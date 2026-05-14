function Footer() {
  return (
    <footer className="bg-transparent relative z-10 text-gray-400 py-8 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <h2 className="text-white font-semibold text-lg">
          Manan Maheshwari
        </h2>

        {/* Center */}
        <p className="text-sm text-center">
          © 2026 Manan Maheshwari. All Rights Reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm">

          <a
            href="https://github.com/mananladha"
            className="hover:text-purple-400 transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/maheshwarimanan/"
            className="hover:text-purple-400 transition duration-300"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/mananladha.01/"
            className="hover:text-purple-400 transition duration-300"
          >
            Instagram
          </a>

          <a
            href="mailto:manan.ladha@gmail.com"
            className="hover:text-purple-400 transition duration-300"
          >
            Mail
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;