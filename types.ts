export type Difficulty = "쉬움" | "보통" | "어려움" | "전문가";

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  id: number;
  name: string;
  category: string;
  difficulty: Difficulty;
  baseServings: number;
  ingredientsList: Ingredient[];
  recipeSteps: string[];
}
