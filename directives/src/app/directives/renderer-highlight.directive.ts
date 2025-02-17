import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]',
})
export class RendererHighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'green'
    );
  }

  @HostListener('click') onMouseClick(event: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'blue'
    );
  }

  @HostListener('mouseenter') onMouseFocus(event: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'grey'
    );
  }

  @HostListener('mouseleave') onMouseBlur(event: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'pink'
    );
  }

  @HostListener('mouseEnter') onMouseEnter(event: Event) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'teal'
    );
  }
}
