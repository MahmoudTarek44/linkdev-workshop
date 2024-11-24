import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {inject, Injectable, signal} from "@angular/core";

import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import {Direction} from "@angular/cdk/bidi";

@Injectable({
  providedIn: "root",
})
export class LayoutService {
  _direction = signal<Direction>(DIR.LTR);
  _isLoading = signal(false)

  _onMobile = signal<boolean>(false);
  _onTablet = signal<boolean>(false);

  private _mediaObserver = inject(BreakpointObserver);

  constructor() {
    this._mediaObserver
      .observe(screenSize.MAX_W_40)
      .pipe(takeUntilDestroyed())
      .subscribe((res: BreakpointState) => this._onMobile.set(res.matches)
      );

    this._mediaObserver
      .observe([screenSize.MAX_W_64, screenSize.MIN_W_40])
      .pipe(takeUntilDestroyed())
      .subscribe((res: BreakpointState) => this._onTablet.set(res.breakpoints[screenSize.MAX_W_64] &&
        res.breakpoints[screenSize.MIN_W_40])
      )
  }
}

export enum DIR {
  LTR = "ltr",
  RTL = "rtl",
}

enum screenSize {
  MAX_W_40 = '(max-width: 40rem)',
  MIN_W_40 = '(min-width: 40rem)',
  MAX_W_64 = '(max-width: 64rem)',
}
