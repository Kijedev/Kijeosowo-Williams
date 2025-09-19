import { useState, useEffect } from "react";
import { Link } from "react-router";
import Logo from "./Logo";
import { FiMenu, FiX } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { LuCodeXml } from "react-icons/lu";
import { RiContactsBook3Line } from "react-icons/ri";
import { LiaCertificateSolid } from "react-icons/lia";

const navItems = [
  { name: "About", path: "/about", scrollId: null, icon: <CiUser /> },
  {
    name: "Articles",
    path: "/articles",
    scrollId: "blogpost", // id of the section in DOM
    icon: <IoBookOutline />,
  },
  {
    name: "Projects",
    path: "/projects",
    scrollId: "projects", 
    icon: <LuCodeXml />,
  },
  {
    name: "Contact",
    path: "/contact",
    scrollId: null,
    icon: <RiContactsBook3Line />,
  },
  {
    name: "Certification",
    path: "/certification",
    scrollId: "certification",
    icon: <LiaCertificateSolid />,
  },
];

const NavbarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between lg:px-28 items-center px-6 py-6 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
      <Logo />

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="text-white/50 text-[1rem] flex gap-5 font-light">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-2 hover:text-stone-400 transition-colors duration-500"
            >
              <p>{item.icon}</p>
              {isDesktop && item.scrollId ? (
                <button
                  onClick={() => handleScroll(item.scrollId)}
                  className="hover:text-stone-400 text-white transition-colors duration-500"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-stone-400 text-white transition-colors duration-500"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg p-6 md:hidden">
          <ul className="flex flex-col gap-4 text-white text-lg">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-2 hover:text-stone-400 transition-colors duration-500"
              >
                <p>{item.icon}</p>
                <Link
                  to={item.path}
                  className="hover:text-stone-400 transition-colors duration-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarMenu;
