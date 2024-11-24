import {Component} from '@angular/core';

import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'home',
  standalone: true,
  imports: [TranslatePipe],
  template: `<h1>{{ 'test' | translate }}</h1>
  `
})
export default class HomeComponent {
}
