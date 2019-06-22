import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class StorageService {

  constructor() {}

  /**
   * @method: Public method to store the value in
   *          the session storage
   * @function: saveToWebStorage()
   * @params: <key: string, value: any>
   */
  saveToWebStorage(key: string, value: any): any {
    const stringifyValue = JSON.stringify(value);
    sessionStorage.setItem(key, stringifyValue);
  }

  /**
   * @method: Public method which retrieves the
   *          value passed to the method as a
   *          param from the session storage.
   * @function: retrieveFromWebStorage()
   * @params: <retrievalKey: string>
   * @returns: value from the session storage
   */
  retrieveFromWebStorage(retrievalKey: string): any {
    return sessionStorage.getItem(retrievalKey);
  }
}
