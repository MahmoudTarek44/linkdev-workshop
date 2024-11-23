import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'auth-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <router-outlet/>
  `
})
export default class AuthLayout {

}
