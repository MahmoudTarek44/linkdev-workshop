import {RouterOutlet} from "@angular/router";
import {Component} from '@angular/core';

import {TopBarComponent} from "../../components/topbar/topbar.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [
    TopBarComponent,
    RouterOutlet,
    FooterComponent
  ],
  template: `
    <div>
      <topBar/>

      <router-outlet/>

      <bottomFooter/>
    </div>
  `
})
export default class MainLayout {
}
