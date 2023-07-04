import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterColor]'
})
export class BetterColorDirective implements OnInit{

  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement,'color','black')
    this.renderer.removeStyle(this.elRef.nativeElement,'background-color')
  }

}
