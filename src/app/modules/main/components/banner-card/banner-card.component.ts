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
    <section class="overflow-hidden h-full">
      <div class="relative z-10">
        <div class="absolute -end-[400px] -top-[400px]">
          <img class="animate-slow-spin" [src]="slide().imgUrl" alt="animated-image">
        </div>
      </div>

      <div
        class="relative flex items-center justify-around flex-wrap w-[80%] mx-auto h-full">
        <div class="lg:w-[45%]">
          <h2 class="uppercase font-poppins font-bold text-xl"
              [style.color]="'#' + slide().colorCode">{{ slide().category }}
          </h2>

          <h1 class="font-poppins font-bold text-[44px] lg:text-[64px] text-dark_blue relative">
            {{ slide().title }}

            <div class="absolute -right-8 top-10">
              <img [src]="slide().lineImgUrl" alt="line">
            </div>
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

        <div class="lg:w-[50%] lg:h-full flex items-center">
          <img class="h-fit" src="{{ slide().heroImg }}" [alt]="slide().title"/>
        </div>
      </div>
    </section>
  `
})
export class BannerCardComponent {
  slide = input.required<Slide>()
}
