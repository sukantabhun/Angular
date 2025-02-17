import { Routes } from '@angular/router';
import { HomesComponent } from './components/homes/homes.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGaurdService } from './services/gaurds/auth.gaurd';
import { deactivateRoute } from './services/gaurds/deactivate-route.gaurd';
import { UserResolverService } from './services/resolvers/user.resolver.service';

export const routes: Routes = [
  { path: '', component: HomesComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  //replacing these with children component loading
  // {
  //   path: 'users',
  //   component: UsersComponent,
  // },
  // {
  //   path: 'users/:id/:name',
  //   component: UserComponent,
  // },
  {
    path: 'users',
    component: UsersComponent,
    canActivateChild: [AuthGaurdService],
    children: [
      { path: ':id/:name', component: UserComponent },
      {
        path: ':id/:name/edit',
        component: EditUserComponent,
        canDeactivate: [deactivateRoute],
        resolve: { user: UserResolverService },
      },
    ],
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
