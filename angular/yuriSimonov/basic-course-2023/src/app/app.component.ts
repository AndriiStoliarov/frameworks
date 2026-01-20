import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { filter, from, fromEvent, interval, map, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //* rxjs - это библиотека для работы с асинхронным кодом с помощью класса Observable (поток, поток данных).
  //* Метод pipe() используется для задания различных манипуляций над исходными данными потока, перед тем как они попадут в метод subscribe();
  //* subscribe() используется для получения итоговых данных из потока/для подписки на происходящее событие;
  // someObservable$ = new Observable((sub) => {
  //   //! sub - подписчик, когда мы воспользуемся методом subscribe
  //   console.log(':)');
  //   //* Метод next используется для отправки данных подписчику.
  //   sub.next('Какие-то данные');
  //   //* Метод error используется для генерации ошибки.
  //   // sub.error('Сообщение об ошибке');
  //   //* Метод complete используется для успешного завершения потока.
  //   sub.complete();
  //   setTimeout(() => {
  //     sub.next('Спустя 2 секунды');
  //   }, 2000);
  // });
  // numberObservable$: Observable<number> = new Observable((sub) => {
  //   sub.next(1);
  //   sub.next(2);
  //   sub.next(3);
  //   sub.next(4);
  //   sub.next(5);
  //   sub.complete();
  // });
  // ngOnInit() {
  //   this.someObservable$.subscribe(console.log, console.log);
  //   this.someObservable$.subscribe(
  //     (value) => console.log('2 next: ', value),
  //     (error) => console.log('2 error: ', error),
  //     () => console.log('2 Поток успешно завершен')
  //   );
  //   this.someObservable$.subscribe({
  //     next: (value) => console.log('3 next: ', value),
  //     error: (error) => console.log('3 error: ', error),
  //     complete: () => console.log('3 Поток успешно завершен'),
  //   });
  //   this.someObservable$.subscribe({
  //     next(value) {
  //       console.log('4 next: ', value);
  //     },
  //     error(error) {
  //       console.log('4 error: ', error);
  //     },
  //     complete() {
  //       console.log('4 Поток успешно завершен');
  //     },
  //   });
  //   this.numberObservable$
  //     .pipe(
  //       map((item) => item * 10),
  //       filter((item) => item < 25)
  //     )
  //     .subscribe(console.log);
  // }
  // lesson 30
  // ngOnInit() {
  //   this.numberObservable$.subscribe(console.log);
  //   console.log('=====================');
  //   //* оператор of создает поток из набора значений, которые передаются ему в качестве аргументов.
  //   // of(1, 2, 3, 4, 5).subscribe(console.log);
  //   of(1, 2, 3, 4, 5)
  //     .pipe(map((item) => item * 10))
  //     .subscribe(console.log);
  //   console.log('=====================');
  //   //* оператор from создает поток из набора значений, которые передаются ему в качестве аргументов - итерируемые данные.
  //   from([1, 2, 3, 4, 5])
  //     .pipe(map((item) => item * 10))
  //     .subscribe(console.log);
  //   console.log('=====================');
  //   //* оператор fromEvent создает поток из событий происходящих в DOM дереве. Самостоятельно не завершает поток.
  //   fromEvent(document, 'click').subscribe(console.log);
  //   console.log('=====================');
  //   //* оператор interval создает поток, в который отправляет последовательность чисел с заданным интервалом времени. Самостоятельно не завершает поток.
  //   interval(1000).subscribe(console.log);
  // }

  //lesson 31
  exampleObservable$!: Observable<any>;
  examplePromise$!: Promise<any>;

  ngOnInit() {
    this.exampleObservable$ = interval(1000).pipe(
      map((value) => ({
        previousValue: value - 1,
        currentValue: value,
        nextValue: value + 1,
      })),
    );

    this.examplePromise$ = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise успешно выполнился');
      }, 3000);
    });
  }
}
