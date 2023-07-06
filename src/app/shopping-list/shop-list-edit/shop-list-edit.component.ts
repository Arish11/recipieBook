import { Component, OnInit} from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shop-list-edit',
  templateUrl: './shop-list-edit.component.html',
  styleUrls: ['./shop-list-edit.component.css']
})
export class ShopListEditComponent implements OnInit {

  
  

  constructor(private _shopSrv:ShoppingListService) { }

  ngOnInit(): void {
  }
  
  onIngAdded(name: any,amount: any){
    const newIng = new Ingridient(name.value,amount.value)
    this._shopSrv.addIngridient(newIng)
  }

}
