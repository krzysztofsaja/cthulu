
"use client"
import React, { useState } from "react";
import Link from 'next/link';
import Layout from '../../shared/components/Layout';
import Categories from '../../shared/components/Skill_categories';
import SearchBar from '../../shared/components/SearchBar/SearchBar';


function CharacterSkill() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleSearchSubmit = () => {
    console.log("Submit: Searching for:", searchQuery);
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

      {/* Include the Categories component here */}
      <Categories />

      <Link href="/backstory">Przejdź do historii postaci</Link>
    </Layout>
  );
}

export default CharacterSkill;
