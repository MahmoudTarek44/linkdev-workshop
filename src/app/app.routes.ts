import {Routes} from '@angular/router';
import {authGuard} from "./core/guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    canActivate: [authGuard],
    loadComponent: () => import("./layouts/main/main.layout"),
    loadChildren: () => import("./modules/main/main.routes"),
  },
  {
    path: "auth",
    loadComponent: () => import("./layouts/auth/auth.layout"),
    loadChildren: () => import("./modules/auth/auth.routes"),
  },
  {
    path: '**',
    loadComponent: () => import("./pages/not-found/not-found.component"),
  }
];
