import {Component, inject} from '@angular/core';

import {TranslatePipe} from "@ngx-translate/core";
import tempServicesJson from "./things-we-do.json"
import {SolutionsCardComponent} from "../../components/solutions-card/solutions-card.component";
import {LayoutService} from "../../../../core/services/layout.service";

@Component({
  selector: 'things-we-do',
  standalone: true,
  imports: [
    TranslatePipe,
    SolutionsCardComponent
  ],
  template: `
    <section class="h-full lg:h-[800px] bg-[#EFEFEF] flex items-center">
      <div class="relative bg-purple h-[550px] lg:w-[60%] text-right ml-auto">
        <div class="p-4 lg:p-[70px] lg:w-[80%] ml-auto">
          <h2
            class="mb-14 font-poppins text-6xl text-[#253776] font-bold leading-normal">{{ "We Deliver Digital Productivity" | translate }}
          </h2>
          <p
            class="text-white font-poppins text-2xl font-normal">
            {{ "We craft technology solutions that digitally bond and transform the productivity of our customers and their citizens, workers, consumers and partners." | translate }}
          </p>
        </div>

        @if (!layout._onMobile() && !layout._onTablet()) {
          <div class="flex lg:flex-nowrap lg:flex-row-reverse lg:absolute lg:-top-8 lg:-left-[500px]">
            <div>
              <solutions-card [item]="services[0]"/>
              <solutions-card [item]="services[1]"/>
            </div>

            <div class="lg:mt-24">
              <solutions-card [item]="services[2]"/>
              <solutions-card [item]="services[3]"/>
            </div>

            <div class="lg:mt-48">
              <solutions-card [item]="services[4]"/>
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class ThingsWeDoComponent {
  services = tempServicesJson.services
  layout = inject(LayoutService)
}
