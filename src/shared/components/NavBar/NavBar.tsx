"use client";

import { useState } from "react";
import "./NavBar.css";

const Navbar = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  const buttons = ["", "", "", ""];

  return (
    <div className="navbar">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`navbar-button button-character ${
            index === activeButtonIndex ? "active" : ""
          }`}
          onClick={() => handleButtonClick(index)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
