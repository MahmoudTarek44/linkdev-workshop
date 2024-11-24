import {toSignal} from "@angular/core/rxjs-interop";
import {inject, Injectable, signal} from '@angular/core';

import {map} from "rxjs";

import {Article} from "../../components/news-card/news-card.component";
import {NewsCategory} from "./top-news.component";

import {HttpService} from "../../../../core/services/http.service";

import HOME_API from "../../../../core/API/home.api";

@Injectable({
  providedIn: 'root'
})
export class TopNewsService {
  HTTP = inject(HttpService)

  _newsCategories = toSignal(
    this.HTTP._fetchData<{ newsCategory: NewsCategory[] }>(HOME_API.NEWS_CATEGORY).pipe(
      map((response) => response.newsCategory),
    )
  )

  _newsList = toSignal(
    this.HTTP._fetchData<{ News: Article[] }>(HOME_API.NEWS_LIST).pipe(
      map((response) => response.News),
      map((news) => news.filter((article: Article) => article.showOnHomepage === 'yes')),
    )
  )

  private _favouriteNews = signal<string[]>([])

  _toggleFavourite(id: string) {
    this._favouriteNews().includes(id) ? this._removeFromFavourite(id) : this._addToFavourites(id)
  }

  _isFavourite(id: string) {
    return this._favouriteNews().includes(id)
  }

  private _addToFavourites(id: string) {
    this._favouriteNews.update((value) => [...value, id])
  }

  private _removeFromFavourite(id: string) {
    this._favouriteNews.update((value) => [...value.filter((i) => i !== id)])
  }

}
