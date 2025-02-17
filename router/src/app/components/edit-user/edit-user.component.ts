import { Component, OnInit } from '@angular/core';
import { IDdeactivateGaurd } from '../../services/gaurds/deactivate-route.gaurd';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  imports: [FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements IDdeactivateGaurd, OnInit {
  user!: { id: string; name: string };
  editedUser!: { id: string; name: string };

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.data.subscribe((data) => {
      console.log();
      this.user = {
        id: data['user']['id'],
        name: data['user']['name'],
      };
    });

    this.editedUser = { ...this.user };
  }

  canExit() {
    if (
      this.editedUser.id !== this.user.id ||
      this.editedUser.name !== this.user.name
    ) {
      if (confirm('Are you sure you want to exit?')) {
        return true;
      }
      return false;
    }
    return true;
  }
}
