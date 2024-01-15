// Import necessary modules and components
"use client";

import { useState } from "react";
import Link from 'next/link';
import Layout from '../../shared/components/Layout';
import SearchBar from "@/src/shared/components/SearchBar/SearchBar";

function CharacterSkill() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (value) => {
    console.log("Search", value);
    setSearchQuery(value);
  };

  const handleSearchSubmit = () => {
    console.log("Submit: Searching for:", searchQuery);
    // Add your search logic here
  };

  return (
    <Layout>
       <div className="flex-col items-center">     
          <div className="">
            {/* Include the SearchBar component here */}
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              onSearchSubmit={handleSearchSubmit}/>
            </div>
            <div className="">
              tu powinny byc filtry kategorii
            </div>
            <div className="">
              tu powinny być skills
            </div>
          
      </div>
    </Layout>
  );
}

export default CharacterSkill;
