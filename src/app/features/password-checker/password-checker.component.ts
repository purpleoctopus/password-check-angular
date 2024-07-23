import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-checker',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './password-checker.component.html',
  styleUrl: './password-checker.component.css'
})
export class PasswordCheckerComponent {
  formGroup: FormGroup;
  strength: number = 0;
  /**
   *
   */
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      password: ''
    })
    this.formGroup.get("password")?.valueChanges.subscribe(value => this.checkPassword())
  }

  checkPassword(){
    var temp: number = 0;
    var value: string = this.formGroup.get("password")?.value;
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
