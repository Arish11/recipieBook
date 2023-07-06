import { EventEmitter } from "@angular/core";
import { Ingridient } from "../shared/ingridient.model";

export class ShoppingListService {
    newIng = new EventEmitter<Ingridient[]>()
    private ingridient:Ingridient[] = [
    new Ingridient("Apple",10),
    new Ingridient("grapes",10),
    new Ingridient("garlic",2)]

    getIngridient(){
       return this.ingridient.slice()
    }

    addIngridient(ing:Ingridient){ 
        this.ingridient.push(ing)  
        this.newIng.emit(this.ingridient.slice())
      }
  
      //We can remove the slice function which will then send the direct reference of ingridient variable to shopping list component
      //but if we don't want to do that we will have to add an event emitter which will be subscribed in the ngOnInit of shopList cmp
      //in this event emmiter we will pass the newly added ingridient inside the add ingridient method.
}