// SearchBar.tsx
import React from 'react';
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}) => {
  return (
    <div className=" bg-textBg w-96 h-9 rounded p-2 flex items-center">
      <button onClick={onSearchSubmit}>
        <IoSearch />
      </button>
      <input className="pl-2 bg-textBg"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}/>
    </div>
  );
};

export default SearchBar;
