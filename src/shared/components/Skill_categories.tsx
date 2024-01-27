import { SkillCategory } from "@/src/app/character-skills/skill-categories.type";
import React from "react";

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
  handleAddCategory: () => void;
  handleCategoryClick: (_value: string) => void;
}
const SkillCategories = (props: SkillCategoriesProps) => {
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
          Add Category
        </div>
        {props.categories?.map((category, index) => (
          <Category
            key={index}
            name={category.name}
            percentage={category.percentage}
            onClick={() => props.handleCategoryClick(category.name)}
          />
        ))}
      </div>
      <ul className="mt-2">
        {props.categories?.map((category, index) => (
          <li key={index} className="flex items-center mb-2">
            <div className="w-3 h-3 bg-white border border-gray-500 mr-1"></div>
            {`${category.name} (${category.percentage})`}
            <div className="flex ml-auto">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-11 h-10 bg-white border border-gray-500 mx-1 relative"
                >
                  {i === 0 && (
                    <>
                      <div className="absolute top-0 left-0 bottom-0 right-0 bg-white"></div>
                    </>
                  )}
                  {i !== 0 && (
                    <>
                      <div className="absolute top-0 left-0 bottom-1/2 right-0 bg-black"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white h-1/2 w-4/5"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategories;
