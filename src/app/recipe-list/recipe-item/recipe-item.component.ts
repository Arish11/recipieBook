import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()rec!: Recipe;
  constructor(private _recServ:RecipeService) { }
  // @Output() recipeSelected = new EventEmitter<void>()
  ngOnInit(): void {
    
  }
  // onRecipeSelect(){
  //   //this.recipeSelected.emit()
  //   this._recServ.selectRecipe(this.rec)
  // }
}
