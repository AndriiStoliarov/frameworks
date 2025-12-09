import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'basic course 2023';

  user = {
    name: 'Yura',
    age: '27',
  };

  tooltip = 'Я подсказка для ссылки';

  inLineStyle = {
    width: '50%',
    background: 'green',
  };

  cssClass = 'blue';

  someNumber = 50;

  someDate = new Date();
}
