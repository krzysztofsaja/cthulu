"use client";
import React, {ReactElement, useEffect, useRef, useState} from "react";

export function GearAndPossessions() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const contentRef =  useRef(null);
  const [divs, setDivs] = useState<ReactElement[]>([]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  const addDiv = () => {
    const newDiv = <div key={divs.length}>
      Item name<input type="text"/>
      {/*tutaj dodac style i ikony :-) */}
      <i className=""></i>
      <i className=""></i>
    </div>;

    setDivs([...divs, newDiv]);
  };

  return (
    <div>
      <button className="bg-secondary flex w-full h-10 items-center justify-center rounded-xl [font-family:'Lexend-Bold',Helvetica] font-bold text-white"
              onClick={toggleCollapse}>
        Gear & Possessions
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
        <div>
          <button onClick={addDiv}>
            Add item
          </button>
        </div>
      </div>
    </div>
  )
}