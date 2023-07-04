import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-shop-list-edit',
  templateUrl: './shop-list-edit.component.html',
  styleUrls: ['./shop-list-edit.component.css']
})
export class ShopListEditComponent implements OnInit {

  @Output() ingAdded = new EventEmitter<Ingridient>();

  

  constructor() { }

  ngOnInit(): void {
  }
  
  onIngAdded(name: any,amount: any){
    const newIng = new Ingridient(name.value,amount.value)
    this.ingAdded.emit(newIng)
    console.log(newIng)
  }

}
