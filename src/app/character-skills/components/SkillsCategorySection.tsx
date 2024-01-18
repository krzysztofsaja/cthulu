import SearchBar from "@/src/shared/components/SearchBar/SearchBar";
import { useState } from "react";
import Categories from "../../../shared/components/Skill_categories";

function SkillsCategorySection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleSearchSubmit = () => {
    console.log("Submit: Searching for:", searchQuery);
  };

  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />

      <Categories />
    </div>
  );
}

export default SkillsCategorySection;
