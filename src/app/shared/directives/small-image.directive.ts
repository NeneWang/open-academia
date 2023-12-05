import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[miniRender]'
})
export class SmallImageDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'width', '10em');
    this.renderer.setStyle(this.el.nativeElement, 'height', '10em');
  }

}
