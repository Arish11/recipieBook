import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recDetails!: Recipe;
  flag:boolean=false
  constructor(private recServ:RecipeService) { }

  ngOnInit(): void {
    this.recServ.recipeSelected.subscribe(
      (rec:Recipe) =>{
        this.recDetails = rec
        this.flag = this.recServ.flag
      }
    )
  }
}
