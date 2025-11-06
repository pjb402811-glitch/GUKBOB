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
              <p className="text-md text-gray-400">{recipe.subCategory}</p>
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
          
          {(recipe.purchaseUrl || recipe.youtubeUrl) && (
            <div className="mb-6">
              <div className="flex gap-4">
                {recipe.purchaseUrl && (
                  <div className="flex-1 bg-gray-900/50 p-4 rounded-lg border border-gray-600 flex items-center justify-center">
                    <a
                        href={recipe.purchaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H4.72l-.38-1.52A1 1 0 003 1z" />
                            <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        핵심재료 구매 클릭
                    </a>
                  </div>
                )}
                {recipe.youtubeUrl && (
                  <div className="flex-1 bg-gray-900/50 p-4 rounded-lg border border-gray-600 flex items-center justify-center">
                    <a
                      href={recipe.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                      </svg>
                      영상보고 따라하기
                    </a>
                  </div>
                )}
              </div>
              {recipe.purchaseUrl && (
                <p className="text-xs text-gray-500 mt-3 text-center">
                  이 게시물은 쿠팡파트너스 활동의 일환으로 이에 따른 일정액의 수수료를 제공 받습니다.
                </p>
              )}
            </div>
          )}

          <div className="mb-6">
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