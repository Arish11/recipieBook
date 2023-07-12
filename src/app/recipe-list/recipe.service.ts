import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingridient } from "../shared/ingridient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService{
  recipeSelected = new Subject<Recipe>()  
  
  private recipes : Recipe[] = [ 
  new Recipe(0,"Panner","This is highly recommended","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",
  [new Ingridient('paneer',3), new Ingridient('masala',5)]),
  new Recipe(1,"Chole","When in mood for something spicy","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",
  [new Ingridient('chole',3), new Ingridient('gravy',5)]),
  new Recipe(2,"Soda","Quench your thirst","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",
  [new Ingridient('Soda',3), new Ingridient('sugar',5)])]

  constructor(private slServ:ShoppingListService){}

  getRecipe(){
    return this.recipes.slice()
  }

  selectRecipe(recipe:Recipe){
    this.recipeSelected.next(recipe)
  }

  addToShoppingList(ing:Ingridient[]){
    this.slServ.addedFromRec(ing)
  }

  getRecipeById(id: number){
    return this.recipes[id]
  }
}