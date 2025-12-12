import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'basic course 2023';
  parentName: string = 'hello, world!';

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

  // lesson 06
  ageOfUsers = [{ age: 20 }, { age: 26 }, { age: 22 }];

  constructor() {
    setTimeout(() => {
      // this.ageOfUsers.push({ age: 16 });
      this.ageOfUsers = [...this.ageOfUsers, { age: 16 }];
    }, 3000);
  }

  // lesson  07
  color = 'green';

  changeColor(newColor: string) {
    this.color = newColor;
  }

  checkCurrentValue(event: Event) {
    //! чтобы typescript не ругался на value
    const target = event.target as HTMLInputElement;

    console.log('event :>> ', target.value);
  }

  setNewName(newName: string) {
    this.parentName = newName;
  }
}
