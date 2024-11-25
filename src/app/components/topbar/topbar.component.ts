import {Component, inject} from '@angular/core';

import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatList, MatListItem, MatNavList} from "@angular/material/list";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";

import {TranslatePipe, TranslateService} from "@ngx-translate/core";

import {LANG, TranslationService} from "../../core/services/translation.service";
import {LayoutService} from "../../core/services/layout.service";

@Component({
  selector: 'topBar',
  standalone: true,
  imports: [
    MatToolbar,
    MatNavList,
    MatListItem,
    MatList,
    MatButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatIconButton,
    MatDivider,

    TranslatePipe,
  ],
  template: `

    <mat-toolbar class="!bg-transparent !absolute lg:!px-[140px] !z-50">
      <div class="pt-8 flex items-center justify-between w-full">
        <div>
          <img src="/images/Logo.png" alt="Logo">
        </div>

        @if (!layout._onMobile()) {
          <div class="flex items-center justify-between gap-14">
            <mat-nav-list class="!flex !items-center !justify-between !gap-6">
              <mat-list-item class="!w-fit">{{ 'Home' | translate }}</mat-list-item>
              <mat-list-item class="!w-fit">{{ 'About Us' | translate }}</mat-list-item>
              <mat-list-item class="!w-fit">{{ 'News' | translate }}</mat-list-item>
              <mat-list-item class="!w-fit">{{ 'Contact Us' | translate }}</mat-list-item>
            </mat-nav-list>

            <mat-list class="!flex !items-center !justify-evenly">
              <button mat-flat-button class="!bg-transparent !text-black">{{ "Login" | translate }}</button>
              <button mat-stroked-button class="!rounded-lg">{{ "Sign up" | translate }}</button>
              <button [matMenuTriggerFor]="menu" mat-flat-button class="!bg-transparent !text-black !w-fit">
                <span class="uppercase">
                  {{ translate.currentLang }}
                </span>
                <mat-icon>keyboard_arrow_down</mat-icon>
              </button>

              <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="translation._changeLang(language.EN)">
                  <span>EN</span>
                </button>
                <button mat-menu-item (click)="translation._changeLang(language.AR)">
                  <span>AR</span>
                </button>
              </mat-menu>
            </mat-list>
          </div>
        } @else {
          <button mat-icon-button [matMenuTriggerFor]="mobileNavList">
            <mat-icon>menu</mat-icon>
          </button>

          <mat-menu #mobileNavList="matMenu">
            <button mat-menu-item>{{ 'Home' | translate }}</button>
            <button mat-menu-item>{{ 'About Us' | translate }}</button>
            <button mat-menu-item>{{ 'News' | translate }}</button>
            <button mat-menu-item>{{ 'Contact Us' | translate }}</button>

            <mat-divider/>

            <button mat-menu-item>{{ "Login" | translate }}</button>
            <button mat-menu-item>{{ "Sign up" | translate }}</button>

            <mat-divider/>

            <button mat-menu-item (click)="translation._changeLang(language.EN)">EN</button>
            <button mat-menu-item (click)="translation._changeLang(language.AR)">AR</button>
          </mat-menu>
        }
      </div>
    </mat-toolbar>
  `
})
export class TopBarComponent {
  translation = inject(TranslationService)
  translate = inject(TranslateService)
  layout = inject(LayoutService)

  language = LANG
}
