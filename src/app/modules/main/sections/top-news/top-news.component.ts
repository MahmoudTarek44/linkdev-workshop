import {Component, computed, inject, signal} from '@angular/core';
import {NgClass} from "@angular/common";

import {MatButton} from "@angular/material/button";

import {TranslatePipe} from "@ngx-translate/core";

import {NewsCardComponent} from "../../components/news-card/news-card.component";

import {TopNewsService} from "./top-news.service";


@Component({
  selector: 'top-news',
  standalone: true,
  imports: [
    TranslatePipe,
    MatButton,
    NgClass,
    NewsCardComponent
  ],
  template: `
    <section id="top-news" class="flex flex-col items-center justify-center my-4">
      <h4 class="text-dark_gray font-semibold text-lg font-poppins mb-2">{{ 'Media' |translate }}</h4>
      <h2 class="font-volkhov font-bold text-5xl mb-8">{{ 'Top News' }}</h2>

      <div class="flex flex-wrap items-center justify-center gap-8 mb-8">
        <button type="button"
                (click)="_selectCategory(undefined)"
                [ngClass]="{
                    '!bg-secondary !text-white': selectedCategoryId() === undefined
                    }"
                class="!bg-light_gray !rounded-lg !text-dark_gray !font-poppins"
                mat-flat-button>{{ 'All news' | translate }}
        </button>

        @for (category of _topNewsService._newsCategories(); track category.id) {
          <button type="button"
                  [ngClass]="{
                    '!bg-secondary !text-white': selectedCategoryId() === category.id
                    }"
                  class="!bg-light_gray !rounded-lg !text-dark_gray !font-poppins" mat-flat-button
                  (click)="_selectCategory(category.id)">{{ category.name | translate }}
          </button>
        }
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-[140px] mb-12">

        @for (article of _displayedNewsList(); track article.id) {
          <news-card [article]="article"/>
        }
      </div>

      <button class="!rounded-lg !bg-primary !text-white !w-[266px] !h-[60px] !font-poppins" mat-flat-button
              (click)="viewAllNews.set(!viewAllNews())">
        {{ "View All News"| translate }}
      </button>

    </section>
  `
})
export class TopNewsComponent {
  _topNewsService = inject(TopNewsService);

  protected selectedCategoryId = signal<number | undefined>(undefined)
  protected viewAllNews = signal(false)


  protected _displayedNewsList =
    computed(() => this.viewAllNews() ? this._topNewsService._newsList() : this._topNewsService._newsList()?.slice(0, 6))

  _selectCategory(id: number | undefined) {
    //   TODO: fetch related category news
    this.selectedCategoryId.set(id)
  }
}

export type NewsCategory = {
  id: number,
  name: string,
}
