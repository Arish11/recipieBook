import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingridient } from "../shared/ingridient.model";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>()  
  flag:boolean=false

  private recipes : Recipe[] = [ 
  new Recipe("Panner","This is highly recommended","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",
  [new Ingridient('paneer',3), new Ingridient('masala',5)]),
  new Recipe("Chole","When in mood for something spicy","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",
  [new Ingridient('chole',3), new Ingridient('gravy',5)]),
  new Recipe("Soda","Quench your thirst","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",
  [new Ingridient('Soda',3), new Ingridient('sugar',5)])]

  getRecipe(){
    return this.recipes.slice()
  }

  selectRecipe(recipe:Recipe){
    this.recipeSelected.emit(recipe)
    this.flag = true
    console.log(this.flag)
  }
}