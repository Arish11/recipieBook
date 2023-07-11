import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recDetails!: Recipe;
  recId!: number;
  constructor(private recServ:RecipeService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    // this.recServ.recipeSelected.subscribe(
    //   (rec:Recipe) =>{
    //     this.recDetails = rec
    //   }
    // )

    this.route.params.subscribe(
      (params) => {
        this.recId = +params['id'] 
        this.recDetails = this.recServ.getRecipeById(this.recId)    
      } 
    )
   

  }

  onToShoppingList(): void{
    this.recServ.addToShoppingList(this.recDetails.ingridient)
  }
}
