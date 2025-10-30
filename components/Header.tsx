import React from 'react';
import { DIFFICULTIES } from '../constants';
import { Difficulty } from '../types';

interface HeaderProps {
  onSearch: (term: string) => void;
  onDifficultyFilter: (difficulty: string) => void;
  activeDifficulty: string;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onDifficultyFilter, activeDifficulty }) => {
  return (
    <header className="bg-gray-800 shadow-md p-4 sticky top-0 z-10">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-white text-center mb-4">
          수요일 점심은 든든한 국밥으로
        </h1>
        <input
          type="text"
          placeholder="국밥 이름 검색..."
          className="w-full p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3 bg-gray-700 text-white placeholder-gray-400"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}
        />
        <div className="flex flex-wrap justify-center gap-2">
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
      </div>
    </header>
  );
}

export default Header;
