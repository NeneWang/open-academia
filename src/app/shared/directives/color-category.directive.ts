import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[colorCategory]'
})
export class ColorCategoryDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const content = this.el.nativeElement.textContent;
    let color: string;

    switch (content) {
      case 'Computer Science':
        color = 'blue';
        break;
      case 'Mathematics':
        color = 'red';
        break;
      default:
        color = 'black';
    }

    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}