import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordCheckerComponent } from "./features/password-checker/password-checker.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordCheckerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'usense-test-angular';
}
