import React from 'react';
import { DIFFICULTIES, MAIN_CATEGORIES } from '../constants';
import { Difficulty, MainCategory } from '../types';

interface HeaderProps {
  searchTerm: string;
  onSearch: (term: string) => void;
  onDifficultyFilter: (difficulty: string) => void;
  activeDifficulty: string;
  onMainCategorySelect: (category: MainCategory) => void;
  activeMainCategory: MainCategory;
}

const Header: React.FC<HeaderProps> = ({ 
  searchTerm, 
  onSearch, 
  onDifficultyFilter, 
  activeDifficulty, 
  onMainCategorySelect, 
  activeMainCategory 
}) => {
  return (
    <header className="bg-gray-800 shadow-md pt-4 sticky top-0 z-10">
      <div className="container mx-auto max-w-5xl px-4 pb-4">
        <h1 className="text-3xl font-bold text-white text-center mb-4">
          점심에 이거 만들어 먹을까?
        </h1>
        
        {/* Search Input */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="재료 검색"
            value={searchTerm}
            className="w-full p-2 pl-10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white placeholder-gray-400"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}
          />
        </div>

        {/* Difficulty Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => onDifficultyFilter("all")}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors
              ${activeDifficulty === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
          >
            전체
          </button>
          {DIFFICULTIES.map((diff: Difficulty) => (
            <button
              key={diff}
              onClick={() => onDifficultyFilter(diff)}
              className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors
                ${activeDifficulty === diff
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
            >
              {diff}
            </button>
          ))}
        </div>
        
        {/* Main Category Tabs */}
        <div className="bg-gray-700 rounded-lg p-2 flex justify-around items-center gap-2">
          {MAIN_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onMainCategorySelect(cat)}
              className={`w-full py-2 px-3 text-xl font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-indigo-500 ${
                activeMainCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white hover:bg-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;