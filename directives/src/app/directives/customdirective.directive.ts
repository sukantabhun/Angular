import { Directive, ElementRef, OnInit, ɵgetDirectives } from '@angular/core';

@Directive({ selector: 'highlightText' }) // if selector is used as ['highlightText'] we can use it as an attribute  else as this declaration have to pass it as an html element
export class ColorDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit() {
    (<HTMLElement>this.element.nativeElement).style.backgroundColor = 'red';
    (this.element.nativeElement as HTMLElement).style.color = 'blue';
  }
}
