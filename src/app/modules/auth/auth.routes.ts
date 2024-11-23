import {Routes} from "@angular/router";

const authRoutes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {
    path: "login",
    loadComponent: () => import("./pages/login/login.component"),
  },
  {
    path: "sign-up",
    loadComponent: () => import("./pages/signup/signup.component"),
  },
];

export const authRoutesPath = {
  LOGIN: "/auth/login",
  SIGN_UP: "/auth/sign-up",
};

export default authRoutes;

