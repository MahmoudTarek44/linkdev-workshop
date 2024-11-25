import {Component} from '@angular/core';

@Component({
  selector: 'bottomFooter',
  standalone: true,
  imports: [],
  template: `
    <footer class="w-full">
      <div class="mx-auto w-[80%]">
        <div
          class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8"
        >
          <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a
              class="flex justify-center lg:justify-start"
            >
              <img src="/images/Logo.png" alt="link logo"/>
            </a>
            <p
              class="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left"
            >
              We make technology produce productive, adaptable and sustainable
              business experiences.
            </p>
          </div>
          <!--End Col-->
          <div class="lg:mx-auto text-left">
            <h4 class="text-lg text-gray-900 font-medium mb-7">Company</h4>
            <ul class="text-sm transition-all duration-500">
              <li class="mb-6">
                <a class="text-gray-600 hover:text-gray-900">About</a>
              </li>
              <li class="mb-6">
                <a class="text-gray-600 hover:text-gray-900">Careers</a>
              </li>
              <li class="mb-6">
                <a class="text-gray-600 hover:text-gray-900">Mobile</a>
              </li>
            </ul>
          </div>
          <!--End Col-->
          <div class="lg:mx-auto text-left">
            <h4 class="text-lg text-gray-900 font-medium mb-7">Contact</h4>
            <ul class="text-sm transition-all duration-500">
              <li class="mb-6">
                <a class="text-gray-600 hover:text-gray-900">Help/FQA</a>
              </li>
              <li class="mb-6">
                <a class="text-gray-600 hover:text-gray-900">Press</a>
              </li>
              <li class="mb-6">
                <a class="text-gray-600 hover:text-gray-900">Affilates</a>
              </li>
            </ul>
          </div>
          <!--End Col-->
          <div class="lg:mx-auto text-left">
            <h4 class="text-lg text-gray-900 font-medium mb-7">Media</h4>
            <ul class="text-sm transition-all duration-500">
              <li class="mb-6">
                <a class="text-gray-600 hover:text-gray-900">News</a>
              </li>
              <li class="mb-6">
                <a class="text-gray-600 hover:text-gray-900">Photo</a>
              </li>
              <li class="mb-6">
                <a class="text-gray-600 hover:text-gray-900">Video</a>
              </li>
            </ul>
          </div>
          <!--End Col-->
          <div class="lg:mx-auto text-left flex flex-col items-center justify-start gap-6">
            <div class="flex items-center justify-center gap-2">
              <div class="rounded-full shadow-md w-10 h-10 flex items-center justify-center">
                <i class='bx bxl-facebook'></i>
              </div>
              <div class="rounded-full shadow-md w-10 h-10 flex items-center justify-center">
                <i class='bx bxl-instagram'></i>
              </div>
              <div class="rounded-full shadow-md w-10 h-10 flex items-center justify-center">
                <i class='bx bxl-twitter'></i>
              </div>
            </div>

            <h2 class="text-dark_gray font-poppins text-xl font-normal">{{ "Discover Our App" }}</h2>

            <div class="flex items-center justify-center gap-4">
              <div class="p-1 flex items-center justify-between h-9 w-24 bg-black rounded-2xl text-white gap-1">
                <i class='bx bxl-play-store'></i>
                <span class="text-[9px]">{{ 'GET IT GOOGLE PLAY' }}</span>
              </div>
              <div class="p-1 flex items-center justify-between h-9 w-24 bg-black rounded-2xl text-white gap-1">
                <i class='bx bxl-apple'></i>
                <span class="text-[9px]">{{ 'Available on APPLE' }}</span>
              </div>
            </div>

          </div>
        </div>

        <!--Grid-->
        <div class="py-7 border-t border-gray-200">
          <div class="flex flex-row items-center justify-center align-baseline">
        <span class="text-sm text-gray-500 text-center">
          All rights reserved&#64;Linkdevelopment.com
        </span>
          </div>
        </div>
      </div>
    </footer>


  `
})
export class FooterComponent {

}
