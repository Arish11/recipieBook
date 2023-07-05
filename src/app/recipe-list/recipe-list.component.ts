import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers:[RecipeService]
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = []

  //recipeToShow!: Recipe;
  //flag = false
  
  constructor(private _recServ:RecipeService) { }

  ngOnInit(): void {
    this.recipes= this._recServ.getRecipe()
  }

  // onRecDetails(recDetail: any){
  //  // this.recipeToShow = recDetail
  //   this.flag =true
  // }
}
