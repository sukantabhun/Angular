import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'router';
  constructor(private authService: AuthService) {}
  onClickLogin() {
    this.authService.logIn();
  }

  onClickLogout() {
    this.authService.logOut();
  }
}
