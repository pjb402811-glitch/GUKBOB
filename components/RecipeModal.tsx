import React, { useState, useEffect } from 'react';
import { Recipe } from '../types';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  const [servings, setServings] = useState(recipe?.baseServings || 1);

  useEffect(() => {
    setServings(recipe?.baseServings || 1);
  }, [recipe]);

  if (!recipe) return null;

  const getCalculatedAmount = (amount: number) => {
    if (amount === 0) return '';
    const newAmount = (amount / recipe.baseServings) * servings;
    return Number(newAmount.toFixed(1));
  };

  const getUnit = (unit: string, amount: number) => {
    if (amount === 0) return unit;
    return unit;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">{recipe.name}</h2>
              <p className="text-md text-gray-400">{recipe.category}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-3xl font-light"
            >
              &times;
            </button>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-lg text-gray-100 mb-2">핵심 재료</h4>
            <div className="bg-gray-700 p-3 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h5 className="text-md font-semibold text-indigo-400">{servings}인분 기준</h5>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setServings(s => Math.max(1, s - 1))}
                    className="w-8 h-8 rounded-full bg-indigo-700 text-indigo-200 font-bold text-lg hover:bg-indigo-600 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold w-10 text-center text-white">{servings}</span>
                  <button
                    onClick={() => setServings(s => Math.min(10, s + 1))}
                    className="w-8 h-8 rounded-full bg-indigo-700 text-indigo-200 font-bold text-lg hover:bg-indigo-600 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {recipe.ingredientsList.map(item => (
                  <li key={item.name}>
                    {item.name}: <span className="font-semibold">{getCalculatedAmount(item.amount)}</span> {getUnit(item.unit, item.amount)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-gray-100 mb-2">만드는 법 (Step-by-Step) <span className="text-sm font-normal text-gray-400">(1인분 기준)</span></h4>
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              {recipe.recipeSteps.map((step, index) => (
                <li key={index} className="leading-relaxed p-2 bg-gray-700 rounded-lg">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
        
        <div className="p-4 bg-gray-900 rounded-b-2xl text-right sticky bottom-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition-colors duration-200"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;