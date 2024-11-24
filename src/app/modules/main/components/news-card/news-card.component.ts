import {Component, inject, input} from '@angular/core';

import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatIconButton} from "@angular/material/button";
import {MatChip} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";

import {TranslatePipe} from "@ngx-translate/core";

import {TopNewsService} from "../../sections/top-news/top-news.service";

@Component({
  selector: 'news-card',
  standalone: true,
  imports: [
    MatCardContent,
    MatMenuTrigger,
    MatIconButton,
    MatCardImage,
    MatCard,
    MatIcon,
    MatChip,
    MatMenu,

    TranslatePipe,
  ],
  template: `
    <mat-card class="!max-w-[360px] !h-[485px] !bg-transparent">
      <img class="h-[300px] !rounded-b-none" mat-card-image [src]="article().urlToImage" alt="article-image">
      <mat-card-content>
        <p class="line-clamp-3 my-4 font-poppins text-dark_gray">
          {{ (article().description! || 'No description...') | translate }}
        </p>

        <div class="flex items-center justify-start gap-4">
          <mat-icon class="text-secondary">date_range</mat-icon>
          <span class="text-dark_gray">{{ article().publishedDate }}</span>
        </div>

        <div class="flex items-center justify-between">
          <mat-chip
            class="!bg-light_gray">{{ _categoriesList.get(article().categoryID) }}
          </mat-chip>

          <div class="flex items-center justify-center gap-2 my-3">
            <button mat-icon-button (click)="topNewsService._toggleFavourite(article().id)">
              <mat-icon
                class="text-secondary">{{ topNewsService._isFavourite(article().id) ? 'favorite' : 'favorite_border' }}
              </mat-icon>
            </button>

            <button mat-icon-button [matMenuTriggerFor]="menu">
              <mat-icon class="text-secondary">share</mat-icon>
            </button>

            <mat-menu #menu="matMenu" class="!p-0 !h-fit">
              <div class="rounded-lg flex items-center justify-center">
                <!-- TODO: Use social media icons -->
                <button class="p-1 h-10 bg-[#3B5998]">FaceBook</button>
                <button class="p-1 h-10 bg-[#00B9FF]">Twitter</button>
                <button class="p-1 h-10 bg-[#FF6666]">Messages</button>
              </div>
            </mat-menu>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `
})
export class NewsCardComponent {
  article = input.required<Article>()
  protected topNewsService = inject(TopNewsService);

  protected _categoriesList = new Map([['1', 'Technology'], ['2', 'Sports'], ['3', 'Health'], ['4', 'Economics'], ['5', 'Art']])
}


export type Article = {
  id: string,
  title: string,
  content: string,
  categoryID: string,
  urlToImage: string,
  description: string,
  publishedDate: string,
  showOnHomepage: 'yes' | 'no'
}
