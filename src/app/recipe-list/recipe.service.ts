import { Recipe } from "./recipe.model";

export class RecipeService{
    
  private recipes : Recipe[] = [ 
  new Recipe("Panner","Masala","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg"),
  new Recipe("Chole","Punjabi","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg"),
  new Recipe("Soda","Mitha","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg")]

  getRecipe(){
    return this.recipes.slice()
  }
}