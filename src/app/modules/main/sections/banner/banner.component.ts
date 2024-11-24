import {Component, signal} from '@angular/core';

import {BannerCardComponent} from "../../components/banner-card/banner-card.component";
import banner from "./banner.json"

import {CarouselModule} from 'primeng/carousel';

@Component({
  selector: 'banner',
  standalone: true,
  imports: [CarouselModule, BannerCardComponent],
  template: `

    <div class="relative h-fit lg:mx-[140px]">
      <p-carousel
        [page]="_activeSlideNumber()"
        [value]="_tempSlidesJson"
        [showIndicators]="false"
        [showNavigators]="false"
        [numVisible]="1"
        [numScroll]="1"
      >
        <ng-template let-slide pTemplate="item">
          <banner-card [slide]="slide"/>
        </ng-template>
      </p-carousel>

      <!--  Custom carousel paginator  -->
      <div class="flex items-center justify-between absolute bottom-14 left-8 w-[300px] h-10">
        @for (slide of _tempSlidesJson; track slide.id) {
          <div (click)="_activeSlideNumber.set(slide.id)"
               class="rounded-full h-8 w-8 cursor-pointer"
               [style.background-color]="'#'+ slide.colorCode"
               [ngClass]="{
                    'duration-300 scale-[1.5]': _activeSlideNumber() === slide.id
                }"
          >
          </div>
        }
      </div>
    </div>
  `
})
export class BannerComponent {
  _activeSlideNumber = signal<number>(0)

  protected _tempSlidesJson: Slide[] = banner.slides

  // TODO: add click event on carousel item to toggle slide along side of paginator
}

export type Slide = {
  id: number,
  brief: string,
  order: number,
  title: string,
  imgUrl: string,
  itemUrl: string,
  category: string,
  videoUrl: string,
  colorCode: string
  heroImg: string
  lineImgUrl: string,
}
