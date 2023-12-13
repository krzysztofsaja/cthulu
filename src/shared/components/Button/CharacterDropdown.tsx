// shared/components/Button/CharacterDropdown.tsx
import React, { useReducer } from 'react';
import Button from './Button'; // Dostosuj ścieżkę zgodnie z strukturą projektu

interface CharacterDropdownProps {
  characters: string[];
}

interface CharacterDropdownState {
  selectedCharacter: string | null;
  isDropdownOpen: boolean;
}

type CharacterDropdownAction =
  | { type: 'TOGGLE_DROPDOWN' }
  | { type: 'SELECT_CHARACTER'; character: string };

const characterDropdownReducer = (
  state: CharacterDropdownState,
  action: CharacterDropdownAction
): CharacterDropdownState => {
  switch (action.type) {
    case 'TOGGLE_DROPDOWN':
      return { ...state, isDropdownOpen: !state.isDropdownOpen };
    case 'SELECT_CHARACTER':
      return { selectedCharacter: action.character, isDropdownOpen: false };
    default:
      return state;
  }
};

const CharacterDropdown: React.FC<CharacterDropdownProps> = ({ characters }) => {
  const [state, dispatch] = useReducer(characterDropdownReducer, {
    selectedCharacter: null,
    isDropdownOpen: false,
  });

  const toggleDropdown = () => {
    dispatch({ type: 'TOGGLE_DROPDOWN' });
  };

  const handleCharacterSelect = (character: string) => {
    dispatch({ type: 'SELECT_CHARACTER', character });
  };

  return (
    <div className="relative inline-block text-center">
      <Button onClick={toggleDropdown} label={state.selectedCharacter ? state.selectedCharacter : 'Select Character'} />
      {state.isDropdownOpen && (
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
