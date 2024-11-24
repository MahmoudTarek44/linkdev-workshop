import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {RouterOutlet} from "@angular/router";

import {LangChangeEvent, TranslateService} from "@ngx-translate/core";

import {DIR, LayoutService} from "./core/services/layout.service";
import {LANG} from "./core/services/translation.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div [dir]="layout._direction()">
      <router-outlet/>
    </div>
  `
})
export class AppComponent implements OnInit {
  translate = inject(TranslateService)
  layout = inject(LayoutService);
  destroyRef = inject(DestroyRef)

  constructor() {
    this.translate.addLangs([LANG.EN, LANG.AR]);
    this.translate.use(LANG.EN);
  }

  ngOnInit(): void {

    this.translate.onLangChange.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((event: LangChangeEvent) => {
      this.layout._direction.set(event.lang === LANG.AR ? DIR.RTL : DIR.LTR);
    })
  }
}
