
export type MainCategory = "국밥" | "볶음밥" | "면" | "김치비법";
export type Difficulty = "쉬움" | "보통" | "어려움" | "전문가";

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  id: number;
  name: string;
  mainCategory: MainCategory;
  subCategory: string;
  difficulty: Difficulty;
  baseServings: number;
  ingredientsList: Ingredient[];
  recipeSteps: string[];
  purchaseUrl?: string;
  youtubeUrl?: string;
}
