import { Component, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'basic course 2023';
  // parentName: string = 'hello, world!';
  // user = {
  //   name: 'Yura',
  //   age: '27',
  // };
  // tooltip = 'Я подсказка для ссылки';
  // inLineStyle = {
  //   width: '50%',
  //   background: 'green',
  // };
  // cssClass = 'blue';
  // someNumber = 50;
  // someDate = new Date();
  // lesson 06
  // ageOfUsers = [{ age: 20 }, { age: 26 }, { age: 22 }];
  // constructor() {
  //   setTimeout(() => {
  // this.ageOfUsers.push({ age: 16 });
  //     this.ageOfUsers = [...this.ageOfUsers, { age: 16 }];
  //   }, 3000);
  // }
  // lesson  07
  // color = 'green';
  // changeColor(newColor: string) {
  //   this.color = newColor;
  // }
  // checkCurrentValue(event: Event) {
  //   //! чтобы typescript не ругался на value
  //   const target = event.target as HTMLInputElement;
  //   console.log('event :>> ', target.value);
  // }
  // setNewName(newName: string) {
  //   this.parentName = newName;
  // }
  // lesson  11
  // toggler: boolean = true;
  // str: string = '';
  // arr: any[] = ['text', 123, true, [1, 'abc'], NaN, Symbol];
  // obj: any = {
  //   first: {
  //     second: {
  //       third: {
  //         age: 11,
  //         name: 'Mike',
  //       },
  //     },
  //   },
  // };
  // someTrackByMethod(index: number, item: any) {
  //   console.log(1);
  //   return item;
  // }
  //* lesson 13
  // color: string = 'orange';
  // cssProperties = { color: 'orange', background: 'green' };
  //* lesson 15
  // toggler: boolean = true;
  // arr: any[] = ['text', 123, true, [1, 'abc'], NaN, Symbol];
  // someTrackByMethod(index: number, item: any) {
  //   console.log(1);
  //   return item;
  // }
  //* lesson 16
  title: string = 'Заголовок';
  name: string = 'Имя';
  toggler: boolean = true;
  obj = { age: 12 };

  constructor() {
    setTimeout(() => {
      this.title = 'Другой заголовок';
      // this.obj.age = 10;
      this.obj = { ...this.obj, age: 10 };
    }, 3000);
  }
}
