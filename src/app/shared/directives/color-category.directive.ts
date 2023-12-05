import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[colorCategory]'
})
export class ColorCategoryDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const content = this.el.nativeElement.textContent.trim();
    let color: string;

    switch (content) {
      case 'Computer Science':
        color = 'blue';
        break;
      case 'Mathematics':
        color = 'red';
        break;
      // Add more cases here
      default:
        color = 'black';
    }

    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}