"use client";
import React from 'react';
const GoldButtons = () => {
  const backClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("Cofniecie");
    window.history.back();
  };
  const saveClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("zapisane");
  };
    return (
      <div className="flex justify-between font-custom">
      <button className="bg-secondary flex w-24 h-10 items-center justify-center rounded-xl font-bold text-white" onClick={backClick}>
        BACK
      </button>
      <button id="save-button" className="bg-secondary flex w-24 h-10 items-center justify-center rounded-xl font-bold text-white" onClick={saveClick}>
        SAVE
      </button>
    </div>
    );
  };
export default GoldButtons;
