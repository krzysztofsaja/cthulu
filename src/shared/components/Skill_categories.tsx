import React, { useState } from 'react';

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
        borderRadius: '5px',
        marginRight: '10px', 
      }}
    >
      {name} {percentage}
    </div>
  );
};

const SkillCategories: React.FC = () => {
  const [categories, setCategories] = useState([
    { name: 'Accounting', percentage: '05%' },
    { name: 'Anthropology', percentage: '01%' },
    { name: 'Appraide', percentage: '05%' },
    { name: 'Archeology', percentage: '01%' },
    { name: 'Art/Crafts', percentage: '++%' },
  ]);

  const handleCategoryClick = (category: string) => {
    console.log(`Category clicked: ${category}`);
  };

  const handleAddCategory = () => {
    const newCategory = { name: 'New Category', percentage: '++%' };
    setCategories([newCategory, ...categories]); 
  };

  return (
    <div>
      <div className="flex gap-1 mt-2">
        <div
          className="cursor-pointer bg-white text-black w-84 h-26 p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-xs"
          onClick={handleAddCategory}
          style={{
            borderRadius: '5px',
            marginRight: '10px', 
          }}
        >
          Add Category
        </div>
        {categories.map((category, index) => (
          <Category
            key={index}
            name={category.name}
            percentage={category.percentage}
            onClick={() => handleCategoryClick(category.name)}
          />
        ))}
      </div>
      <ul className="mt-2">
        {categories.map((category, index) => (
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
