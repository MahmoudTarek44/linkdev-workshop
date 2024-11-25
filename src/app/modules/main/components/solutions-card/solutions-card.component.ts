import {Component, input} from '@angular/core';
import {MatCard, MatCardImage} from "@angular/material/card";
import {TranslatePipe} from "@ngx-translate/core";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'solutions-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    TranslatePipe,
    MatIcon
  ],
  template: `
    <mat-card class="w-[250px] h-[250px] relative group overflow-hidden !rounded-none">
      <img
        mat-card-image
        [src]="item().imageUrl"
        alt="Solution Image"
        class="w-full h-full"
      />
      <div
        class="absolute inset-0 bg-black bg-opacity-60 opacity-0 flex items-end justify-center transition-opacity duration-500 group-hover:opacity-100">
        <a
          href="#"
          class="mb-4 text-white mx-6 mr-auto cursor-pointer flex items-center justify-start"
        >
          <mat-icon>arrow_right_alt</mat-icon>
          <span class="mx-3">
                {{ "Read More" | translate }}
            </span>
        </a>
      </div>
    </mat-card>
  `
})
export class SolutionsCardComponent {
  item = input.required<SolutionCard>()
}

type SolutionCard = {
  id: number;
  title: string;
  imageUrl: string;
}
