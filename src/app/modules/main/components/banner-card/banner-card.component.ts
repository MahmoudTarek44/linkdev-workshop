import {Component, input} from '@angular/core';

import {MatButton, MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

import {TranslatePipe} from "@ngx-translate/core";

import {Slide} from "../../sections/banner/banner.component";


@Component({
  selector: 'banner-card',
  standalone: true,
  imports: [
    TranslatePipe,

    MatFabButton,
    MatIcon,
    MatButton
  ],
  template: `
    <div
      class="!z-10 relative lg:h-[calc(100vh_-_4rem)] sm:h-fit lg:w-fit flex flex-wrap lg:flex-nowrap items-end justify-between">
      <div class="absolute -top-11 -right-52 animate-slow-spin w-[700px] h-[700px]">
        <img [src]="slide().imgUrl" alt="animated-image">
      </div>

      <div class="flex flex-col gap-4 sm:w-full lg:w-[55%] mb-24 p-5">
        <h2 class="uppercase font-poppins font-bold text-xl"
            [style.color]="'#' + slide().colorCode">{{ slide().category }}
        </h2>

        <h1 class="font-volkhov font-bold text-[44px] lg:text-[64px] text-dark_blue relative">
          {{ slide().title }}

          <img class="absolute -right-8 top-10" [src]="slide().lineImgUrl" alt="line">
        </h1>

        <p class="text-dark_gray font-poppins text-base mb-4">
          {{ slide().brief }}
        </p>

        <div class="flex items-center justify-start gap-8 lg:w-[400px]">
          <button mat-flat-button
                  class="!rounded-lg !bg-primary !text-white !w-[170px] !h-[60px] !font-poppins">
            {{ 'Find Out More' | translate }}
          </button>

          <div class="flex items-center justify-between gap-6">
            <button mat-fab class="!rounded-full !bg-demo_red !text-white">
              <mat-icon>play_arrow</mat-icon>
            </button>

            <span class="font-poppins text-base text-dark_gray">{{ 'Play Demo' }}</span>
          </div>

        </div>
      </div>

      <div class="lg:w-[670px] lg:h-[670px]">
        <img src="{{ slide().heroImg }}" [alt]="slide().title"/>
      </div>
    </div>

  `
})
export class BannerCardComponent {
  slide = input.required<Slide>()
}
