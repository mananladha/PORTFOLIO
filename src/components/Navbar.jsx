import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Connect", path: "/connect" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4">

      <div
        className="
        max-w-7xl mx-auto
        flex items-center justify-between
        bg-white/10 backdrop-blur-xl
        border border-white/10
        rounded-full
        px-6 md:px-8 py-4
        shadow-lg
        "
      >

        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          <h1
            className="
            text-white
            text-xl md:text-2xl
            font-bold
            tracking-wide
            hover:text-purple-400
            transition duration-300
            cursor-pointer
            "
          >
            Manan Maheshwari
          </h1>
        </Link>

        {/* Nav Links */}
        <div className="flex gap-4 md:gap-8 text-white text-sm md:text-base">

          {navLinks.map((link, index) => (

            <Link
              key={index}
              to={link.path}
              className={`
                transition duration-300
                hover:text-purple-400
                hover:scale-110
                relative
                ${
                  location.pathname === link.path
                    ? "text-purple-400"
                    : ""
                }
              `}
            >

              {link.name}

              {/* Active Underline */}
              {location.pathname === link.path && (
                <span
                  className="
                  absolute
                  left-0
                  -bottom-2
                  w-full
                  h-[2px]
                  bg-purple-400
                  rounded-full
                  "
                ></span>
              )}

            </Link>

          ))}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;