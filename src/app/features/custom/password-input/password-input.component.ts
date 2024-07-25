import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordCheckerService } from '../../../services/password-checker.service';

@Component({
  selector: 'password-input',
  standalone: true,
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})

/**
 * Custom component for password input, sharing data to the password service
 */
export class PasswordInputComponent implements ControlValueAccessor {
  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};
  disabled: boolean = false;

  /**
   *
   */
  constructor(private passwordService: PasswordCheckerService) {}

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = (value: string) => {
      fn(value);  // Викликає функцію, передану Angular
      this.passwordService.checkPassword(value);  // Викликає метод сервісу
    };
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    if (this.onChange) {
      this.onChange(this.value);
    }
  }

  handleBlur(): void {
    if (this.onTouched) {
      this.onTouched();
    }
  }
}
