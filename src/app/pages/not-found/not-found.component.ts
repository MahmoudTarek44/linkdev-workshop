import {Component} from '@angular/core';

import {MatCard, MatCardImage} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'not-found',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    NgOptimizedImage
  ],
  template: `
    <mat-card class="!w-3/4 !h-1/2">
      <img mat-card-image width="100%" height="100%"
           [ngSrc]="'../../../assets/not-found-404.svg'" alt="Not found 404">
    </mat-card>
  `
})
export default class NotFoundComponent {
}
