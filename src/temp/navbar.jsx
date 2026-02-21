import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  // State to track if it's dark mode or light mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  // This hook runs every time isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="fixed top-0 left-0 w-full p-5 flex justify-end z-50">
      {/* Flex container to hold the navbar and the toggle button side-by-side */}
      <div className="flex items-center gap-4">
        {/* NAVIGATION PILL */}
        <div className="w-fit p-1 px-1 rounded-xl border border-white/50 dark:border-white/20 bg-white/40 dark:bg-black/40 backdrop-blur-sm shadow-[0_0px_15px_gray] dark:shadow-[0_0px_8px_white] transition-colors duration-500">
          <ul className="flex gap-1">
            <li className="text-gray-900 dark:text-white font-bold py-2 rounded-full cursor-pointer transition-all duration-300 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-lg font-bold transition-all duration-300
    ${
      isActive
        ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]"
        : "text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
    }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-gray-900 dark:text-white font-bold py-2 rounded-full cursor-pointer transition-all duration-300 ">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-lg font-bold transition-all duration-300
    ${
      isActive
        ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]"
        : "text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
    }`
                }
              >
                About
              </NavLink>
            </li>
            <li className="text-gray-900 dark:text-white font-bold py-2 rounded-full cursor-pointer transition-all duration-300 ">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-lg font-bold transition-all duration-300
    ${
      isActive
        ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]"
        : "text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
    }`
                }
              >
                Skills
              </NavLink>
            </li>
            <li className="text-gray-900 dark:text-white font-bold py-2 rounded-full cursor-pointer transition-all duration-300 ">
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-lg font-bold transition-all duration-300
    ${
      isActive
        ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]"
        : "text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
    }`
                }
              >
                Resume
              </NavLink>
            </li>
            <li className="text-gray-900 dark:text-white font-bold py-2 rounded-full cursor-pointer transition-all duration-300 ">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-lg font-bold transition-all duration-300
    ${
      isActive
        ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]"
        : "text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
    }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="text-gray-900 dark:text-white font-bold py-2 rounded-full cursor-pointer transition-all duration-300 ">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-lg font-bold transition-all duration-300
    ${
      isActive
        ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]"
        : "text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
    }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* THEME TOGGLE BUTTON */}
        <button
          onClick={toggleTheme}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-white/50 dark:border-white/20 bg-white/40 dark:bg-black/40 backdrop-blur-md shadow-[0_0px_15px_gray] dark:shadow-[0_0px_7px_white] text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? (
            <FaSun className="text-xl" />
          ) : (
            <FaMoon className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
