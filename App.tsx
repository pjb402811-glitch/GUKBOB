import React, { useState, useMemo } from 'react';
import { recipesData } from './data';
import { Recipe } from './types';
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import RecipeModal from './components/RecipeModal';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filteredRecipes = useMemo(() => {
    return recipesData.filter((recipe) => {
      const nameMatch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
      const difficultyMatch = difficultyFilter === "all" || recipe.difficulty === difficultyFilter;
      return nameMatch && difficultyMatch;
    });
  }, [searchTerm, difficultyFilter]);

  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      <Header
        onSearch={setSearchTerm}
        onDifficultyFilter={setDifficultyFilter}
        activeDifficulty={difficultyFilter}
      />

      <main className="container mx-auto max-w-5xl p-4">
        {filteredRecipes.length === 0 ? (
          <p className="text-center text-gray-400 text-xl mt-10">
            "{searchTerm}"에 대한 검색 결과가 없습니다.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onSelect={setSelectedRecipe}
              />
            ))}
          </div>
        )}
      </main>

      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </div>
  );
}

export default App;
