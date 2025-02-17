import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ShortenPipe } from '../../pipes/shorten.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-filter-pipes',
  imports: [CommonModule, ShortenPipe, FormsModule, FilterPipe],
  templateUrl: './filter-pipes.component.html',
  styleUrl: './filter-pipes.component.css',
})
export class FilterPipesComponent implements OnInit {
  inputVal: string = '';
  users = [
    { name: 'SUK', date: new Date(2003, 11, 1) },
    { name: 'ABC', date: new Date(2004, 1, 8) },
  ];

  constructor() {}

  ngOnInit(): void {}

  addSampleUser() {
    this.users.push({ name: 'Sample', date: new Date(2001, 2, 21) });
  }

  appData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User Data Received');
    }, 3000);
  });
}
