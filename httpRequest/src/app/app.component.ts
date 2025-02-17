import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'httpRequest';
  data: string = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getData().subscribe((res) => {
      console.log(res);
      this.data = res;
      console.log(typeof res);
    });
  }
}
