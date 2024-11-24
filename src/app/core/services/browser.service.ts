import {Injectable} from '@angular/core';

enum StorageType {
  LOCAL = 'local',
  SESSION = 'session',
}

@Injectable({
  providedIn: 'root',
})
export class BrowserService {
  // TODO: add encryption for browser storage stored data

  _set<T>(storage: StorageType, key: string, value: T) {
    storage === StorageType.LOCAL && localStorage.setItem(key, JSON.stringify(value));
    storage === StorageType.SESSION && sessionStorage.setItem(key, JSON.stringify(value));
  }

  _get(storage: StorageType, key: string) {
    let value;
    if (storage === StorageType.LOCAL) {
      value = localStorage.getItem(key);
    } else {
      value = sessionStorage.getItem(key);
    }
    return value && JSON.parse(value) || null;
  }

  _remove(storage: StorageType, key: string) {
    storage === StorageType.LOCAL ? localStorage.removeItem(key) : sessionStorage.removeItem(key);
  }

  _clear(storage: StorageType) {
    storage === StorageType.LOCAL ? localStorage.clear() : sessionStorage.clear();
  }
}
