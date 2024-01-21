
import React from 'react';

interface CategoryProps {
  name: string;
  onClick: () => void;
}

const Category: React.FC<CategoryProps> = ({ name, onClick }) => {
  return (
    <div
      className="cursor-pointer bg-white text-black w-84 h-26 p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-xs"
      onClick={onClick}
      style={{
        borderRadius: '5px', 
      }}
    >
      {name}
    </div>
  );
};

const SkillCategories: React.FC = () => {
  const handleCategoryClick = (category: string) => {
    console.log(`Category clicked: ${category}`);
  };

  const categories = [
    { name: 'Accounting', percentage: '05%' },
    { name: 'Anthropology', percentage: '01%' },
    { name: 'Appraide', percentage: '05%' },
    { name: 'Archeology', percentage: '01%' },
  ];

  return (
    <div>
      <div className="flex gap-1 mt-2">
        {categories.map((category, index) => (
          <Category
            key={index}
            name={category.name}
            onClick={() => handleCategoryClick(category.name)}
          />
        ))}
      </div>
      <ul className="mt-2">
        {categories.map((category, index) => (
          <li key={index} className="flex items-center mb-2">
            <div className="w-3 h-3 bg-white border border-gray-500 mr-1"></div>
            {`${category.name} (${category.percentage})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategories;
