import {Component} from '@angular/core';
import {TopNewsComponent} from "../../sections/top-news/top-news.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [TopNewsComponent],
  template: `
    <top-news/>
  `
})
export default class HomeComponent {
}
