import { Component, OnInit} from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shop-list-edit',
  templateUrl: './shop-list-edit.component.html',
  styleUrls: ['./shop-list-edit.component.css']
})
export class ShopListEditComponent implements OnInit {

  constructor(private _shopSrv:ShoppingListService) { }

  ngOnInit(): void {
  }
  
  onIngAdded(form : NgForm){
    let value  = form.value
    const newIng = new Ingridient(value.name,value.amount)
    this._shopSrv.addIngridient(newIng)
  }

}
