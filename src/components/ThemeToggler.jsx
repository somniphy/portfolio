import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for dark mode preference
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      <FontAwesomeIcon
        icon={isDarkMode ? faSun : faMoon}
        className={`text-xl md:text-3xl transition ease-in-out ${
          isDarkMode ? "text-yellow-500" : "text-blue-800"
        }`}
      />
    </button>
  );
}

export default ThemeToggler;
