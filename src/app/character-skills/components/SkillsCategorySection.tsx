import SearchBar from "@/src/shared/components/SearchBar/SearchBar";
import SkillCategories from "@/src/shared/components/Skill_categories";
import { useState } from "react";
import { SkillCategory } from "../skill-categories.type";

function SkillsCategorySection() {
  const [searchQuery, setSearchQuery] = useState("");

  const initialCategories: SkillCategory[] = [
    {
      name: "Accounting",
      percentage: "05%",
      tags: [{ name: "Accounting", id: "accounting" }],
    },
    { name: "Anthropology", percentage: "01%", tags: [] },
    { name: "Appraide", percentage: "05%", tags: [] },
    { name: "Archeology", percentage: "01%", tags: [] },
    { name: "Art/Crafts", percentage: "++%", tags: [] },
  ];

  const [filteredCategories, setFilteredCategories] =
    useState<SkillCategory[]>(initialCategories);

  const handleCategoryClick = (category: string) => {
    console.log(`Category clicked: ${category}`);
  };

  const handleAddCategory = () => {
    const newCategory = { name: "New Category", percentage: "++%" };
    // setCategories([newCategory, ...categories]);
  };

  const handleSearchChange = (value: string) => {
    const result = initialCategories.filter((category) => {
      return category.name.toLowerCase().startsWith(value.toLowerCase());
    });

    setFilteredCategories(result);
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

      <SkillCategories
        categories={filteredCategories}
        handleCategoryClick={handleCategoryClick}
        handleAddCategory={handleAddCategory}
      />
    </div>
  );
}

export default SkillsCategorySection;
