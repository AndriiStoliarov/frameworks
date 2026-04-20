import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GlobalErrorComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
