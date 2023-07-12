import { Ingridient } from "../shared/ingridient.model";

export class Recipe{
   public id : number 
   public name : string = "";
   public description : string = "";
   public imagePath : string = "";
   public ingridient: Ingridient[] = [];

    constructor(id: number,name:string,desc:string,img:string, ing:Ingridient[]){
        this.id = id
        this.name = name
        this.description = desc
        this.imagePath = img
        this.ingridient = ing
    }

}