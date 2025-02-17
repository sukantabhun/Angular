import { Component } from '@angular/core';
import { FilterPipesComponent } from './components/filter-pipes/filter-pipes.component';

@Component({
  selector: 'app-root',
  imports: [FilterPipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pipes';
}
