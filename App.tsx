import React, { useState, useMemo, useCallback } from 'react';
import { recipesData } from './data';
import { Recipe, MainCategory } from './types';
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import RecipeModal from './components/RecipeModal';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeMainCategory, setActiveMainCategory] = useState<MainCategory>("국밥");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleMainCategorySelect = useCallback((category: MainCategory) => {
    setActiveMainCategory(category);
    setSearchTerm("");
    setDifficultyFilter("all");
  }, []);

  const filteredRecipes = useMemo(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return recipesData.filter((recipe) => {
      const mainCategoryMatch = recipe.mainCategory === activeMainCategory;
      const difficultyMatch = difficultyFilter === "all" || recipe.difficulty === difficultyFilter;
      const searchMatch = lowercasedSearchTerm === '' || 
                          recipe.name.toLowerCase().includes(lowercasedSearchTerm) ||
                          recipe.ingredientsList.some((ingredient) =>
                            ingredient.name.toLowerCase().includes(lowercasedSearchTerm)
                          );
      
      return mainCategoryMatch && difficultyMatch && searchMatch;
    });
  }, [searchTerm, difficultyFilter, activeMainCategory]);

  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      <Header
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        onDifficultyFilter={setDifficultyFilter}
        activeDifficulty={difficultyFilter}
        onMainCategorySelect={handleMainCategorySelect}
        activeMainCategory={activeMainCategory}
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
