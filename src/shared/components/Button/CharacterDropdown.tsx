// shared/components/Button/CharacterDropdown.tsx
import React, { useState } from 'react';
import Button from './Button'; // Adjust the path based on your project structure

interface CharacterDropdownProps {
  characters: string[];
}

const CharacterDropdown: React.FC<CharacterDropdownProps> = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  const handleCharacterSelect = (character: string) => {
    setSelectedCharacter(character);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-center">
      <Button onClick={toggleDropdown} label={selectedCharacter ? selectedCharacter : 'Select Character'} />
      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-328px rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {characters.map((character, index) => (
              <div key={character} className={index !== 0 ? 'border-t border-gray-300' : ''}>
                <Button
                  onClick={() => handleCharacterSelect(character)}
                  label={`[${character}]`}
                  className="bg-blue-500 hover:bg-blue-700 text-white w-full p-6 rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDropdown;
