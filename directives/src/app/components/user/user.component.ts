import { Component } from '@angular/core';
import { ColorDirective } from '../../directives/customdirective.directive';
import { RendererHighlightDirective } from '../../directives/renderer-highlight.directive';
import { AlternateIfDirective } from '../../directives/alternate-if.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [
    ColorDirective,
    RendererHighlightDirective,
    AlternateIfDirective,
    CommonModule,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  isAvailable: boolean = true;
  isAlpha: boolean = true;

  onClickButton() {
    console.log(this.isAvailable);
    this.isAvailable = !this.isAvailable;
  }
}
