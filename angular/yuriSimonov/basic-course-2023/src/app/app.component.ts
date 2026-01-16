import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //* rxjs - это библиотека для работы с асинхронным кодом с помощью класса Observable (поток, поток данных).
  //* Метод pipe() используется для задания различных манипуляций над исходными данными потока, перед тем как они попадут в метод subscribe();
  //* subscribe() используется для получения итоговых данных из потока/для подписки на происходящее событие;

  someObservable$ = new Observable((sub) => {
    //! sub - подписчик, когда мы воспользуемся методом subscribe
    console.log(':)');

    //* Метод next используется для отправки данных подписчику.
    sub.next('Какие-то данные');
    //* Метод error используется для генерации ошибки.
    // sub.error('Сообщение об ошибке');
    //* Метод complete используется для успешного завершения потока.
    sub.complete();

    setTimeout(() => {
      sub.next('Спустя 2 секунды');
    }, 2000);
  });

  numberObservable$: Observable<number> = new Observable((sub) => {
    sub.next(1);
    sub.next(2);
    sub.next(3);
    sub.next(4);
    sub.next(5);
  });

  ngOnInit() {
    this.someObservable$.subscribe(console.log, console.log);
    this.someObservable$.subscribe(
      (value) => console.log('2 next: ', value),
      (error) => console.log('2 error: ', error),
      () => console.log('2 Поток успешно завершен')
    );
    this.someObservable$.subscribe({
      next: (value) => console.log('3 next: ', value),
      error: (error) => console.log('3 error: ', error),
      complete: () => console.log('3 Поток успешно завершен'),
    });
    this.someObservable$.subscribe({
      next(value) {
        console.log('4 next: ', value);
      },
      error(error) {
        console.log('4 error: ', error);
      },
      complete() {
        console.log('4 Поток успешно завершен');
      },
    });

    this.numberObservable$
      .pipe(
        map((item) => item * 10),
        filter((item) => item < 25)
      )
      .subscribe(console.log);
  }
}
