import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  House,
  Zap,
  Briefcase,
  FolderKanban,
  User,
  Mail,
} from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    {
      id: "home",
      label: "Home",
      icon: House,
    },
    {
      id: "skills",
      label: "Skills",
      icon: Zap,
    },
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
    },
    {
      id: "projects",
      label: "Projects",
      icon: FolderKanban,
    },
    {
      id: "about",
      label: "About",
      icon: User,
    },
    {
      id: "connect",
      label: "Connect",
      icon: Mail,
    },
  ];

  const [active, setActive] = useState("home");
  const navRef = useRef(null);

  const [pillStyle, setPillStyle] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!navRef.current) return;

    const activeButton = navRef.current.querySelector(
      `[data-id="${active}"]`
    );

    if (!activeButton) return;

    const parentRect = navRef.current.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();

    setPillStyle({
      left: buttonRect.left - parentRect.left,
      width: buttonRect.width,
    });
  }, [active]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
    return (
    <>
      {/* ========================= DESKTOP ========================= */}

          <motion.nav

            initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}

            className="
            hidden lg:flex

            fixed
            top-5
            left-1/2
            -translate-x-1/2

            z-50
            "
          >

            <div
              className="
              grid

              grid-cols-[auto_1fr]

              items-center

              gap-8

              px-5
              py-3

              rounded-full

              border
              border-white/10

              bg-white/10

              backdrop-blur-[30px]

              shadow-[0_8px_40px_rgba(0,0,0,.35)]
              "
            >

              {/* LOGO */}

            <button
              
              onClick={() => scrollToSection("home")}
              className="
                flex
                items-center
                gap-3

                hover:scale-105
                hover:shadow-[0_0_25px_rgba(255,255,255,.08)]
                transition-all
                duration-300
              "
            >
              {/* Logo - Only on very wide screens */}
              <img
                src="/manan_logo.svg"
                alt="Manan Maheshwari Logo"
                className="
                  hidden
                  2xl:block

                  w-11
                  h-11

                  object-contain

                  transition-all
                  duration-300

                  hover:rotate-6
                "
              />

              {/* Name - Laptop & Desktop */}
              <span
                className="
                  hidden
                  lg:block

                  text-white
                  font-bold

                  text-xl
                  xl:text-2xl

                  whitespace-nowrap
                "
              >
                Manan Maheshwari
              </span>
            </button>

              {/* LINKS */}

              <div
                ref={navRef}
                className="
                relative

                flex

                items-center

                gap-2
                "
              >
                <motion.div

                    animate={{
                        x: pillStyle.left,
                        width: pillStyle.width,
                    }}

                    transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                    }}

                    className="
                    absolute

                    top-0
                    bottom-0

                    rounded-full

                    bg-white/20

                    backdrop-blur-3xl

                    border
                    border-white/20

                    shadow-lg

                    z-[1]
                    "
                />
                {navLinks.map((item) => {

                  const Icon = item.icon;

                  const isActive = active === item.id;

                  return (

                    <button

                      data-id={item.id}
                      key={item.id}

                      onClick={() => scrollToSection(item.id)}

                      className={`
                            relative

                            group

                            flex
                            items-center
                            gap-2

                            px-5
                            py-3

                            rounded-full

                            overflow-hidden

                            text-sm
                            font-medium

                            transition-all
                            duration-300

                            hover:scale-105

                            ${
                              isActive
                                ? "text-white"
                                : "text-gray-300 hover:text-white"
                            }

                            z-10
                            `}

                    >
<motion.div
    className="
    absolute
    inset-0

    rounded-full

    bg-white/5

    opacity-0

    group-hover:opacity-100

    transition-opacity
    duration-300

    -z-10
    "
/>
<motion.div
    whileHover={{
        scale: 1.15,
        rotate: -8,
    }}

    transition={{
        duration: .25,
    }}
>

<Icon
    size={18}
    className={`
        transition-colors

        ${
            isActive
            ? "text-white"
            : "text-gray-300 group-hover:text-white"
        }
    `}
/>

</motion.div>

<motion.span

    whileHover={{
        y: -1,
    }}

    transition={{
        duration:.2,
    }}

    className={`
        transition-colors

        ${
            isActive
            ? "text-white"
            : "text-gray-300 group-hover:text-white"
        }
    `}
>

    {item.label}

</motion.span>

                    </button>


                  );

                })}

              </div>

            </div>

          </motion.nav>

        


            {/* ========================= MOBILE / iPHONE DOCK ========================= */}


          <motion.nav

            initial={{ y: 100, opacity: 0 }}

            animate={{ y: 0, opacity: 1 }}

            exit={{ y: 100, opacity: 0 }}

            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}

            className="
              fixed
              bottom-6
              left-1/2
              -translate-x-1/2

              lg:hidden

              z-50
            "
          >

            <div
              className="
                relative

                flex
                items-center
                gap-2

                px-3
                py-3

                rounded-full

                bg-white/10
                backdrop-blur-[30px]

                border
                border-white/10

                shadow-[0_8px_40px_rgba(0,0,0,.35)]
              "
            >

              {navLinks.map((item) => {

                const Icon = item.icon;

                const isActive = active === item.id;

                return (

                  <button
                    data-id={item.id}
                    key={item.id} 

                    onClick={() => scrollToSection(item.id)}

                    className="
                      relative

                      p-3

                      rounded-full

                      transition-all

                      duration-300

                      z-10
                    "
                  >

                
                    <Icon

                      size={22}

                      className={`
                        transition

                        ${
                          isActive
                            ? "text-white"
                            : "text-gray-300"
                        }
                      `}
                    />

                  </button>

                );

              })}

            </div>

          </motion.nav>

        

    </>
  );

}

export default Navbar;