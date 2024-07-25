import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordCheckerService {
  strength: number = 0;
  constructor() { }

  /**
   * Method is used for calculating password strength
   * @param value password string
   * @returns 
   */
  checkPassword(value: string): void{
    var temp: number = 0;
    var letters = /[a-zA-Z]/;
    var symbols = /[!@#$%^&*(),.?":{}|<>\/\\[\];'`~_+=-]/;
    var digits = /[1234567890]/;
    if(letters.test(value)){
      temp++;
    }
    if(symbols.test(value)){
      temp++;
    }
    if(digits.test(value)){
      temp++;
    }

    this.strength = temp;
  }
}
