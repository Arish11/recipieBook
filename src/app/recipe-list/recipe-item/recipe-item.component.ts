import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()rec!: Recipe;
  constructor(private _recServ:RecipeService,
              private router : Router) { }
  // @Output() recipeSelected = new EventEmitter<void>()
  ngOnInit(): void {
    
  }

  //We can either navigate through recipe list by the below method on each click event or simply use [routerLink] for it

  // onNavigate(){
  //   this.router.navigate(['/recipes',this.rec.id])
  // }


  // onRecipeSelect(){
  //   //this.recipeSelected.emit()
  //   this._recServ.selectRecipe(this.rec)
  // }
}
