import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PasswordCheckerService } from '../../../services/password-checker.service';

@Component({
  selector: 'password-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css'
})

export class PasswordStrengthComponent{
/**
 *
 */
constructor(private passwordService: PasswordCheckerService) {}
  public get strength(): number{
    return this.passwordService.strength;
  }
}
