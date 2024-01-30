import { SkillCategory } from "@/src/app/character-skills/skill-categories.type";
import React, { useState } from "react";

interface CategoryProps {
  name: string;
  percentage: string;
  onClick: () => void;
}

const Category: React.FC<CategoryProps> = ({ name, percentage, onClick }) => {
  return (
    <div
      className="cursor-pointer bg-white text-black w-84 h-26 p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-xs"
      onClick={onClick}
      style={{
        borderRadius: "5px",
        marginRight: "10px",
      }}
    >
      {name} {percentage}
    </div>
  );
};

interface SkillCategoriesProps {
  categories: SkillCategory[];
  handleAddCategory: (newCategory: { name: string; percentage: string }) => void;
  handleCategoryClick: (_value: string) => void;
}

const SkillCategories = (props: SkillCategoriesProps) => {
  const [newCategoryName, setNewCategoryName] = useState<string>('');
  const [newCategoryPercentage, setNewCategoryPercentage] = useState<string>('');
  const [newCategories, setNewCategories] = useState<SkillCategory[]>([]);

  const handleAddCategory = () => {
    if (newCategoryName.trim() !== '' && newCategoryPercentage.trim() !== '') {
      props.handleAddCategory({
        name: newCategoryName,
        percentage: newCategoryPercentage,
      });
      setNewCategories([...newCategories, { name: newCategoryName, percentage: newCategoryPercentage }]);
      setNewCategoryName('');
      setNewCategoryPercentage('');
    }
  };

  return (
    <div>
      <div className="flex gap-1 mt-2">
        <div
          className="cursor-pointer bg-white text-black w-84 h-26 p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-xs"
          onClick={props.handleAddCategory}
          style={{
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Medical
        </div>
        <div
          className="cursor-pointer bg-white text-black w-84 h-26 p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-xs"
          onClick={() => props.handleCategoryClick("Category 1")}
          style={{
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Category 1
        </div>
        <div
          className="cursor-pointer bg-white text-black w-84 h-26 p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-xs"
          onClick={() => props.handleCategoryClick("Category 2")}
          style={{
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Category 2
        </div>
        
      
      </div>
      <ul className="mt-2">
        {props.categories?.map((category, index) => (
          <li key={index} className="flex items-center mb-2">
            <div className="w-3 h-3 bg-white border border-gray-500 mr-1 text-center">{index + 1}</div>
            {`${category.name} (${category.percentage})`}
            <div className="flex ml-auto">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-11 h-10 bg-white border border-gray-500 mx-1 relative"
                >
                  {i !== 0 && (
                    <>
                      <div className="absolute top-0 left-0 bottom-1/2 right-0 bg-black"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white h-1/2 w-4/5 text-center">
                        {i + 1}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </li>
        ))}
        {/* Add the new category line */}
        {newCategories.map((newCategory, index) => (
          <li key={index} className="flex items-center mb-2">
            <div className="w-3 h-3 bg-white border border-gray-500 mr-1 text-center"></div>
            {`${newCategory.name} (${newCategory.percentage})`}
            <div className="flex ml-auto">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-11 h-10 bg-white border border-gray-500 mx-1 relative"
                >
                  {i !== 0 && (
                    <>
                      <div className="absolute top-0 left-0 bottom-1/2 right-0 bg-black"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white h-1/2 w-4/5 text-center">
                        {props.categories.length + index + 1}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-2">
        <input
          type="text"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          placeholder="New Category Name"
          className="w-48 h-10 p-2 rounded-md border border-gray-500"
        />
        <input
          type="text"
          value={newCategoryPercentage}
          onChange={(e) => setNewCategoryPercentage(e.target.value)}
          placeholder="Percentage"
          className="w-24 h-10 p-2 rounded-md border border-gray-500 ml-2"
        />
        <button
          onClick={handleAddCategory}
          className="cursor-pointer bg-white text-black w-84 h-26 p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-xs ml-2"
        >
          Add New Category
        </button>
      </div>
    </div>
  );
};

export default SkillCategories;
