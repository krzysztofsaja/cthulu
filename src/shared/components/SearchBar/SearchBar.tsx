// SearchBar.tsx
import React from 'react';
import { CiSearch } from "react-icons/ci";

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
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button onClick={onSearchSubmit}>
        <CiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
