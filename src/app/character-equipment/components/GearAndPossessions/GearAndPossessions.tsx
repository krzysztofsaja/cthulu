"use client";
import React, {ReactElement, useEffect, useRef, useState} from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

export function GearAndPossessions() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const contentRef =  useRef(null);
  const [divs, setDivs] = useState<ReactElement[]>([]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  const addDiv = () => {
    const newDiv = <div key={divs.length}>
      <div className="bg-textBg rounded-xl mt-3 mb-3 w-5/6 ml-9">
        <p className="font-bold ml-3">Item name</p>
          <div className="bg-textBg flex flex-row rounded-xl mt-3 mb-3 w-5/6 ml-8">
            <input className="bg-textBg w-60 border-b-2 border-black -ml-5 mb-2 -mt-2" type="text"/>
            <button className="ml-4 mb-4 -mt-4 text-2xl"><FaEdit /></button>
            <button className="ml-4 mb-4 -mr-2 -mt-4 text-2xl"><FaTrash /></button>
          </div>
      </div>
    </div>;

    setDivs([...divs, newDiv]);
  };

  return (
    <div>
      <button className="bg-primary flex w-full h-10 items-center justify-center rounded-xl font-bold text-white"
              onClick={toggleCollapse}>
        <span className="ml-36">Gear & Possessions</span> 
        <span className="ml-20 mr-4 text-3xl font-bold" >
          <MdKeyboardArrowDown/>
        </span>
      </button>
      <div className="collapse"
        style={{
          visibility: isCollapsed ? "hidden" : "visible",
        }}>
        <div>
          {divs.map((div, index) => (
            <React.Fragment key={index}>{div}</React.Fragment>
          ))}
        </div>
        <div className="mt-4 ml-36">
          <button className="bg-secondary flex w-32 h-10 items-center justify-center rounded-xl font-medium text-white"
          onClick={addDiv}>
            <span className="text-2xl"><IoMdAddCircle /></span>
            <p className="ml-2">Add item</p>
          </button>
        </div>
      </div>
    </div>
  )
}