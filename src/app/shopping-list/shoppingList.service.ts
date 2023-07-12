import { EventEmitter } from "@angular/core";
import { Ingridient } from "../shared/ingridient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    newIng = new Subject<Ingridient[]>()
    private ingridient:Ingridient[] = [
    new Ingridient("Apple",10),
    new Ingridient("grapes",10),
    new Ingridient("garlic",2)]

    getIngridient(){
       return this.ingridient.slice()
    }

    addIngridient(ing:Ingridient){ 
        this.ingridient.push(ing)  
        this.newIng.next(this.ingridient.slice())
    }

    addedFromRec(ing:Ingridient[]){
      // for(let i of ing){
      //   console.log(i.name,i.amount)
      //   this.addIngridient(i)
      // }
      /* The implementation above is perfectly fine and works just as well but it will emmit an event every time a new 
      recepie is added which is fine but we receive an array of recipe from recDetails and if there are 10 ingridients so it is not 
      wise to emmit 10 events for a single operation hence we use spread operator which can take multiple arguments and emmit them as a list*/
      this.ingridient.push(...ing)
      this.newIng.next(this.ingridient.slice())
    }
  
      //We can remove the slice function which will then send the direct reference of ingridient variable to shopping list component
      //but if we don't want to do that we will have to add an event emitter which will be subscribed in the ngOnInit of shopList cmp
      //in this event emmiter we will pass the newly added ingridient inside the add ingridient method.
}