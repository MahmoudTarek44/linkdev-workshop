import {Component} from '@angular/core';
import {BannerComponent} from "../../sections/banner/banner.component";
import {ThingsWeDoComponent} from "../../sections/things-we-do/things-we-do.component";
import {TopNewsComponent} from "../../sections/top-news/top-news.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [BannerComponent, ThingsWeDoComponent, TopNewsComponent],
  template: `
    <banner/>

    <things-we-do/>

    <top-news/>
  `
})
export default class HomeComponent {
}
