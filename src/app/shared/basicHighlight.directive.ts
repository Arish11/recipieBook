import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[basicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elRef : ElementRef){

    }

    ngOnInit(){
        this.elRef.nativeElement.style.backgroundColor = "yellow"
    }
}