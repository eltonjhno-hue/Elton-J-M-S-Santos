export interface Chapter {
  id: number;
  title: string;
  recipesCount: number;
  recipes?: string[];
  description?: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface RecipeSample {
  title: string;
  chapter: string;
  ingredients: string[];
  preparation: string[];
  traditionalUse: string;
  importantNotes: string[];
}
