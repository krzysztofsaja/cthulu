// Import necessary modules and components
import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../../shared/components/Layout';
import SearchBar from 

function CharacterSkill() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const handleSearchSubmit = () => {
    console.log('Searching for:', searchQuery);
    // Add your search logic here
  };

  return (
    <Layout>
      <h1>Character Skill</h1>

      {/* Include the SearchBar component here */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />

      <Link href="/backstory">Przejdź do historii postaci</Link>
    </Layout>
  );
}

export default CharacterSkill;
