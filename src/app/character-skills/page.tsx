
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
    
  };

  return (
    <Layout>
    <div className="flex-col items-center">     
      <div className="">
        {}
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
        </div>
      </div>
      <Categories />
      
    </Layout>
  );
}

export default CharacterSkill;
