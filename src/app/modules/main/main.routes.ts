import {Routes} from "@angular/router";

const mainRoutes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {
    path: 'home',
    loadComponent: () => import("./pages/home/home.component"),
  },
];

export const mainRoutesPath = {
  HOME: "/main/home",
};

export default mainRoutes;

