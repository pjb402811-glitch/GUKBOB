import React from 'react';
import { Recipe, Difficulty } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
}

const getDifficultyClass = (difficulty: Difficulty) => {
  switch (difficulty) {
    case "쉬움": return "bg-green-900 text-green-300";
    case "보통": return "bg-yellow-900 text-yellow-300";
    case "어려움": return "bg-red-900 text-red-300";
    case "전문가": return "bg-gray-600 text-gray-100";
    default: return "bg-gray-700 text-gray-300";
  }
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSelect }) => {
  return (
    <div
      className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={() => onSelect(recipe)}
    >
      <div className="p-5">
        <h3 className="text-xl font-semibold text-indigo-400 mb-2">{recipe.name}</h3>
        <p className="text-sm text-gray-400 mb-3">{recipe.category}</p>
        <div className="flex justify-between items-center">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyClass(recipe.difficulty)}`}>
            난이도: {recipe.difficulty}
          </span>
          <span className="text-sm bg-indigo-900 text-indigo-300 px-3 py-1 rounded-full font-medium">
            레시피 보기
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
