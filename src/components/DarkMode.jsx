import { useState, useEffect } from "react";

function DarkMode({ toggleDarkMode }) {
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  useEffect(() => {
    const handleDarkModeChange = (e) => {
      setIsChecked(e.target.checked);
      toggleDarkMode();
    };

    const checkbox = document.getElementById("toggle-dark-mode");
    checkbox.checked = isChecked;

    checkbox.addEventListener("change", handleDarkModeChange);

    return () => {
      checkbox.removeEventListener("change", handleDarkModeChange);
    };
  }, [isChecked, toggleDarkMode]);

  return (
    <>
      <input
        type="checkbox"
        className="toggle"
        id="toggle-dark-mode"
      />
      <label htmlFor="toggle-dark-mode">
        <span className="toggle__moon">&#9789;</span>
        <span className="toggle__sun">&#9788;</span>
      </label>
    </>
  );
}

export default DarkMode;
