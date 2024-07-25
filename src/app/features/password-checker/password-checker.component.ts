import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordCheckerService } from '../../services/password-checker.service';
import { PasswordInputComponent } from "../custom/password-input/password-input.component";
import { PasswordStrengthComponent } from "../custom/password-strength/password-strength.component";

@Component({
  selector: 'app-password-checker',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PasswordInputComponent, PasswordStrengthComponent],
  templateUrl: './password-checker.component.html',
  styleUrl: './password-checker.component.css'
})
export class PasswordCheckerComponent {
  formGroup: FormGroup;

  /**
   *
   */
  constructor(private fb: FormBuilder, private passwordService: PasswordCheckerService) {
    this.formGroup = this.fb.group({
      password: '',
      passwordinput: new FormControl()
    })
  }

}
