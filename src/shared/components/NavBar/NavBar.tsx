"use client";
import { useState } from "react";
import "./NavBar.css";
import Link from "next/link";

const Navbar = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  const buttons = [
    { name: "Profile", link: "/character-profile" },
    { name: "Backstory", link: "/backstory" },
    { name: "Equipment", link: "/character-equipment" },
    { name: "Skills", link: "/character-skills" },
  ];

  return (
    <div className="navbar">
      {buttons.map((button, index) => (
        <Link
          href={button.link}
          key={index}
          className={`navbar-button button-character ${
            index === activeButtonIndex ? "active" : ""
          }`}
        ></Link>
      ))}
    </div>
  );
};

export default Navbar;
