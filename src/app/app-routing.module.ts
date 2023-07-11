import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-list/recipe-detail/recipe-detail.component';
import { RecipeDefaultComponent } from './recipe-list/recipe-default/recipe-default.component';
import { RecipeEditComponent } from './recipe-list/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path : '', redirectTo : '/recipes', pathMatch:'full'},
  {path : 'recipes', component: RecipeListComponent, children:[
    {path:'', component: RecipeDefaultComponent},
    {path:'new', component: RecipeEditComponent},
    {path:':id',component:RecipeDetailComponent},
    {path:':id/edit',component:RecipeEditComponent},
  ]},
  {path: 'shoppingList', component: ShoppingListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
