  /**
 * Service works with localstorage,
 * adds and gets data.
 */

import { Injectable } from '@angular/core';
import { oneRecord } from './onerecord';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor(){ }

  /**
 * Method getRecords();
 * @returns array of data from localStorage or
 * @returns empty array, if localStorage was empty.
 */
  getRecords(): oneRecord[] {
    let recordExists = localStorage.getItem('testRecStorage');
    return recordExists ? JSON.parse(recordExists) : [];
  }


 /**
 * Method addRecord(rec: oneRecord);
 * @param rec: object, pair 'name' - 'description' for add.
 * Gets array of data from localStorage,
 * adds new object to the end of array.
 * Writes a new array to localStorage, 
 * replacing the old array with a new one.
 */
  addRecord(rec: oneRecord) {
    let records = this.getRecords();
    records.push(rec);
    localStorage.setItem('testRecStorage', JSON.stringify(records));
  }
  
}
