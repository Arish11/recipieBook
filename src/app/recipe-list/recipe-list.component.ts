import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [ new Recipe("Panner","Masala","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg"),
  new Recipe("Chole","Punjabi","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg"),
  new Recipe("Soda","Mitha","https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg")]
  recipeToShow!: Recipe;
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecDetails(recDetail: any){
    console.log(recDetail);
    this.recipeToShow = recDetail
  }
}
