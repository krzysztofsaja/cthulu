"use client";
import React, {useRef, useState} from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
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

  function getHalfSkillValue(stat: number) {
    return Math.floor(Number(stat / 2));
  }

  function getLowestSkillValue(stat: number) {
    return Math.floor(Number(stat / 5));
  }

  return (
    <div>
      <button className="bg-primary flex w-full h-10 items-center justify-center rounded-xl [font-family:'Lexend-Bold',Helvetica] font-bold text-white"
      onClick={toggleCollapse}>
        <span className="ml-36">Characteristic Passive</span> 
        <span className="ml-28 text-3xl font-bold" >
          <MdKeyboardArrowDown/>
        </span>
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
          <ul className="grid grid-cols-3 gap-3 mt-6 h-full place-items-center">
            {stats.map((s, index) => (
              <li key={index}>
                <div className="flex flex-col mb-8 font-custom">
                  <span className="bg-primary text-white text-center rounded-bl rounded-br w-24">{s}</span>
                    <div className="flex font-medium">
                      <input
                        className="bg-textBg h-15 w-14 mt-1 mr-1 rounded text-center"
                        value={characteristicValues[s]}
                        type="number"
                        onChange={(e) => handleCharacteristicChange(s, e.target.value)}
                      />
                      <div className="flex flex-col">
                        <div className="bg-textBg w-9 h-7 mt-1 mb-1 rounded text-center">{getHalfSkillValue(characteristicValues[s])}</div>
                        <div className="bg-textBg w-9 h-7 rounded text-center">{getLowestSkillValue(characteristicValues[s])}</div>
                      </div>
                    </div>
                  </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
