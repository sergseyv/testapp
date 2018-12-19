  /**
 * Pipe to cut off characters from the string
 * and to add " ..." to it.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'strcut' })

export class StrcutPipe implements PipeTransform {

  /**
 * Method transform(strInput: string, numSymbols: string): string;
 * @param strInput: string to cutting off.
 * @param numSymbols: number of symbols to cutting off.
 * @returns strInput, if length of strInput <=100.
 * Else takes 100 first symbols of strInput, adds " ..."
 * and returns.
 */
  transform(strInput: string, numSymbols: string): string {
    let num = parseInt(numSymbols);
    return (strInput.length <= num) ? strInput : strInput.substr(0, num) + ' ...';
  }
  
}
