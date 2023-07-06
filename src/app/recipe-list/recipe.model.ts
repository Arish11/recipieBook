import { Ingridient } from "../shared/ingridient.model";

export class Recipe{
   public name : string = "";
   public description : string = "";
   public imagePath : string = "";
   public ingridient: Ingridient[] = [];

    constructor(name:string,desc:string,img:string, ing:Ingridient[]){
        this.name = name
        this.description = desc
        this.imagePath = img
        this.ingridient = ing
    }

}