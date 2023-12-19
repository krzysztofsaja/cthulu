// SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button onClick={onSearchSubmit}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.516 14.6H14.7L14.395 14.295C16.29 12.4 16.29 9.2 14.395 7.305C12.5 5.41 9.3 5.41 7.405 7.305C5.51 9.2 5.51 12.4 7.405 14.295C9.3 16.19 12.5 16.19 14.395 14.295L14.7 14.6V15.013L19.294 19.606L20.707 18.192L16.113 13.598H15.7V13.185L15.516 14.6ZM9.917 14.295C11.812 16.19 14.212 16.19 16.107 14.295C18.002 12.4 18.002 9.2 16.107 7.305C14.212 5.41 11.812 5.41 9.917 7.305C8.022 9.2 8.022 12.4 9.917 14.295Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
