import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shoppingList.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  newIngSubject!: Subscription;

  ingridient:Ingridient[] = []

  constructor( private _shopList : ShoppingListService) { }

  ngOnInit(): void {
    this.ingridient = this._shopList.getIngridient()
    this.newIngSubject = this._shopList.newIng.subscribe(
      (ing:Ingridient[]) => {
        this.ingridient=ing
      }
    )
  }

  ngOnDestroy(): void {
    this.newIngSubject.unsubscribe()
  }
}
