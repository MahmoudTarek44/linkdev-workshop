import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";

import {TranslateService} from "@ngx-translate/core";
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet/>
  `
})
export class AppComponent implements OnInit {
  translate = inject(TranslateService)

  constructor() {
    this.translate.addLangs(['ar', 'en']);
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
