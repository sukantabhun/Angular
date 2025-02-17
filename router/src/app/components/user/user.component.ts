import { Component } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user!: { id: string; name: string };

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.user = {
      id: this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name'],
    };

    //dynamic routing with auto update data
    this.activeRoute.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name: data['name'],
      };
    });

    this.activeRoute.queryParams.subscribe((data: Params) => {
      console.log(data);
    });

    this.activeRoute.fragment.subscribe((data) => {
      console.log(data);
    });
  }
  onEditUser() {
    this.router.navigate(['/users', this.user.id, this.user.name, 'edit'], {
      queryParamsHandling: 'preserve',
    });
  }
}
