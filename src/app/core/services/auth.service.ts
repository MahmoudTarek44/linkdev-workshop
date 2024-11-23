import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken = signal<string>('ABCDE')
  isLoggedIn = signal<boolean>(true)
}
