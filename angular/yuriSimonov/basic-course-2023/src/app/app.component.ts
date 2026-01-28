import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import {
  delay,
  filter,
  from,
  fromEvent,
  interval,
  map,
  Observable,
  of,
} from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { DataService } from './services/data.service';
import { RandomService } from './services/random.service';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, ChildComponent, AsyncPipe],
  imports: [AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // changeDetection: ChangeDetectionStrategy.Default,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RandomService],
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
  //
  //lesson 31
  // exampleObservable$!: Observable<any>;
  // examplePromise$!: Promise<any>;
  // ngOnInit() {
  //   this.exampleObservable$ = interval(1000).pipe(
  //     map((value) => ({
  //       previousValue: value - 1,
  //       currentValue: value,
  //       nextValue: value + 1,
  //     })),
  //   );
  //   this.examplePromise$ = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve('Promise успешно выполнился');
  //     }, 3000);
  //   });
  // }
  //
  //lesson 32
  //* Change detection - механизм, которым angular определяет изменилось ли состояние приложения и нужно ли обновить DOM-дерево.
  // title: string = 'Hello, world!';
  // interval$ = interval(1000);
  // signal = signal(0);
  // ngDoCheck() {
  //   console.log('ngDoCheck app-root');
  // }
  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit app-root');
  //   setTimeout(() => {
  //     this.title = 'Привет, мир!';
  //     // this.signal.set(1);
  //     // this.cdr.detach();
  //   }, 3000);
  //   setTimeout(() => {
  //     // this.cdr.reattach();
  //   }, 6000);
  // }
  // handleClick() {
  //   console.log('handleClick');
  // }
  //lesson 33
  // constructor(private cdr: ChangeDetectorRef) {
  //   this.cdr.detach();
  // }
  //lesson 36
  // name: string = 'Миша';
  // constructor(private cdr: ChangeDetectorRef) {
  //   setTimeout(() => {
  //     this.name = 'Максим';
  //     this.cdr.markForCheck();
  //   }, 3000);
  // }
  //lesson 37
  //* компоненты в angular предназначены для управления представлением и взаимодействием с пользователем.
  //* сервисы в angular предназначены для выполнения бизнес логики и работы с данными.
  // private _dataService: DataService;
  // constructor(dataService: DataService) {
  //   this._dataService = dataService;
  //   console.log(this._dataService.getData());
  // }
  // users: any;
  // users$: Observable<any>;
  // constructor(
  //   private dataService: DataService,
  //   private cdr: ChangeDetectorRef,
  //   private randomService: RandomService,
  // ) {
  //   console.log(this.dataService.getData());
  //   this.dataService.getUsers().subscribe((users) => {
  //     console.log(users);
  //     this.users = users;
  //     // this.cdr.detectChanges();
  //   });
  //   this.users$ = this.dataService.getUsers().pipe(delay(2000));
  //   console.log(this.randomService.getRandomNumber());
  // }
  // ngAfterViewInit() {
  //   console.log('this.users :>> ', this.users);
  // }
  //lesson 39
  data = {
    one: {
      two: {
        three: {
          title: 'Hello world',
        },
      },
    },
  };

  asyncData$ = of(this.data);

  constructor() {}
}
