import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  user!: { id: string; name: string };

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

      //accessing query params and fragment
      this.activeRoute.queryParams.subscribe((data: Params) => {
        console.log(data);
      });

      this.activeRoute.fragment.subscribe((data) => {
        console.log(data);
      });
    });
  }

  onClickCategoriesBtn() {
    // logic
    this.router.navigateByUrl('/categories'); //Navigate by .navigateByUrl

    //option 2
    // this.router.navigate(['/categories', id])  Navigate by .navigate
  }

  //routing with query params and fragment
  onClickCategoriesBtnToSpecificUser() {
    this.router.navigate(['/users', 1, 'suk'], {
      queryParams: { page: 1, search: 'sukku' },
      fragment: 'loading',
    });
  }
}
