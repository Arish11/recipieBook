import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridient:Ingridient[] = [new Ingridient("Apple",10),
  new Ingridient("grapes",10),
  new Ingridient("garlic",2)]

  constructor() { }

  ngOnInit(): void {
  }
  addItem(event: any){
    console.log("event",event)
    this.ingridient.push(event)
  }

}
