"use client";
import React, {useRef, useState} from "react";
import {useForm} from "react-hook-form";

export function CharacteristicPassive() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const contentRef =  useRef(null);
  // const [value, setValue] = useState(0);
  const [characteristicValues, setCharacteristicValues] = useState({
    STR: 0,
    DEX: 0,
    POW: 0,
    CON: 0,
    APP: 0,
    EDU: 0,
    SIZ: 0,
    INT: 0,
  });

  const stats = [
    "STR",
    "DEX",
    "POW",
    "CON",
    "APP",
    "EDU",
    "SIZ",
    "INT",
  ]

  const handleCharacteristicChange = (characteristic, newValue) => {
    setCharacteristicValues((prevValues) => ({
      ...prevValues,
      [characteristic]: newValue,
    }));
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  function half(stat: number) {
    return Math.floor(Number(stat / 2));
  }

  function lowestValue(stat: number) {
    return Math.floor(Number(stat / 5));
  }

  return (
    <div>
      <button className="bg-secondary flex w-full h-10 items-center justify-center rounded-xl [font-family:'Lexend-Bold',Helvetica] font-bold text-white"
      onClick={toggleCollapse}>
        Characteristic Passive
      </button>
      <div className="collapse"
           style={{
             maxHeight: isCollapsed ? "0" : contentRef.current.scrollHeight + "px",
             visibility: isCollapsed ? "collapse" : "visible",
           }}>
        <div ref={contentRef}>
          {/*<span>STR</span>*/}
          {/*<input type="number"/>*/}
          {/*<div>0</div>*/}
          {/*<div>0</div>*/}
          <ul>
            {stats.map((s, index) => (
              <li key={index}>
                <div>
                  <span>{s}</span>
                  <input
                    value={characteristicValues[s]}
                    type="number"
                    onChange={(e) => handleCharacteristicChange(s, e.target.value)}
                  />
                  <div>{half(characteristicValues[s])}</div>
                  <div>{lowestValue(characteristicValues[s])}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
