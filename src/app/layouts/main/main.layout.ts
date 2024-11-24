import {Component, inject} from '@angular/core';
import {RouterOutlet} from "@angular/router";

import {MatProgressBar} from "@angular/material/progress-bar";

import {TopBarComponent} from "../../components/topbar/topbar.component";
import {FooterComponent} from "../../components/footer/footer.component";

import {LayoutService} from "../../core/services/layout.service";

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [
    RouterOutlet,

    MatProgressBar,

    TopBarComponent,
    FooterComponent,
  ],
  template: `
    <div>
      <topBar/>

      @if (layout._isLoading()) {
        <mat-progress-bar mode="indeterminate"/>
      }

      <div class="h-[calc(100vh_-_4rem)]]">
        <router-outlet/>
      </div>

      <bottomFooter/>
    </div>
  `
})
export default class MainLayout {
  layout = inject(LayoutService);
}
