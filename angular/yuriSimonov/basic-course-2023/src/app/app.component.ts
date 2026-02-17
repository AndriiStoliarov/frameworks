import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  Inject,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import {
  catchError,
  combineLatestWith,
  debounceTime,
  delay,
  distinctUntilChanged,
  EMPTY,
  filter,
  from,
  fromEvent,
  interval,
  map,
  Observable,
  of,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { AsyncPipe, formatNumber } from '@angular/common';
import { DataService } from './services/data.service';
import { RandomService } from './services/random.service';
import { UserService } from './services/user.service';
import {
  ADMIN_RANDOM_SERVICE_TOKEN,
  TOKEN,
  USER_RANDOM_SERVICE_TOKEN,
} from './shared/tokens/tokens';
import { HttpClient } from '@angular/common/http';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { User } from './interfaces/user';
import { NotificationService } from './services/notification.service';
import { minLengthValidator, requiredValidator } from './validators/sync';
import { asyncRequiredValidator } from './validators/async';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CustomInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // changeDetection: ChangeDetectionStrategy.Default,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    RandomService,
    // DataService,
    // {
    //   provide: DataService,
    //   useClass: UserService,
    // },
    // {
    //   provide: TOKEN,
    //   useValue: 'Какие-то строковые данные',
    // },
    // {
    // provide: TOKEN,
    // useFactory: () => console.log('Какая-то логика внутри функции'),
    // },
    // {
    //   provide: TOKEN,
    //   useFactory: () => {
    //     if (Math.random() > 0.5) {
    //       return {
    //         message: 'Число больше 0.5',
    //       };
    //     }
    //     return {
    //       message: 'Число меньше 0.5',
    //     };
    //   },
    // },
    // {
    //   provide: TOKEN,
    //   useFactory: (http: HttpClient) => {
    //     if (Math.random() > 0.5) {
    //       return new RandomService();
    //     }
    //     return new DataService(http);
    //   },
    //   deps: [HttpClient],
    // },
    // {
    //   provide: USER_RANDOM_SERVICE_TOKEN,
    //   useExisting: RandomService,
    // },
    // {
    //   provide: ADMIN_RANDOM_SERVICE_TOKEN,
    //   useExisting: RandomService,
    // },
    // строка
    // { provide: TOKEN, useValue: 'Какие-то строковые данные', multi: true },
    // // число
    // { provide: TOKEN, useValue: 1, multi: true },
    // // булево
    // { provide: TOKEN, useValue: true, multi: true },
    // // объект
    // { provide: TOKEN, useValue: { name: 'Вася' }, multi: true },
    // // массив
    // { provide: TOKEN, useValue: [1, 2, 3], multi: true },
    // // функция
    // {
    //   provide: TOKEN,
    //   useValue: () => console.log('Какая-то логика внутри функции'),
    //   multi: true,
    // },
  ],
})
export class AppComponent {
  // lesson 49
  private formBuilder = inject(FormBuilder);

  reactiveForm = this.formBuilder.group({
    firstInput: ['Первый инпут'],
    secondInput: ['Второй инпут', Validators.minLength(3)],
  });

  templateForm = {
    firstInput: 'Первый инпут',
    secondInput: 'Второй инпут',
  };

  onSubmit(value?: any) {
    console.log('value :>> ', value);
  }
  // lesson 48
  //! FormControl это ангуляровский класс, который предоставляет одно поле формы с его значением, валидаторами и состоянием.
  // inputField = new FormControl(
  //   'Значение по умолчанию',
  //   null,
  //   asyncRequiredValidator,
  // );
  // inputField = new FormControl('Значение по умолчанию', {
  //   validators: [Validators.required, Validators.minLength(3)],
  //   asyncValidators: asyncRequiredValidator,
  // });
  // exampleForm = new FormGroup({
  //   name: new FormControl('Вася'),
  //   age: new FormControl(20),
  //   address: new FormGroup({
  //     street: new FormControl('улица Ленина'),
  //     city: new FormControl('Москва'),
  //   }),
  //   pets: new FormArray([new FormControl('Мурзик'), new FormControl('Барсик')]),
  // });
  // exampleFormFB = this.fb.group({
  //   name: ['Вася', Validators.required, asyncRequiredValidator],
  //   age: [
  //     20,
  //     {
  //       validators: [requiredValidator, minLengthValidator(2)],
  //     },
  //   ],
  //   address: this.fb.group({
  //     street: ['улица Ленина'],
  //     city: ['Москва'],
  //   }),
  //   // pets: this.fb.array([this.fb.control('Мурзик'), this.fb.control('Барсик')]),
  //   pets: this.fb.array(['Мурзик', 'Барсик']),
  // });
  // get pets() {
  //   return this.exampleFormFB.get('pets') as FormArray;
  // }
  // //! методы FormBuilder:
  // // control - для создания отдельного поля формы;
  // // group - для создания группы полей или формы;
  // // array - для создания динамических полей формы;
  // constructor(private fb: FormBuilder) {}
  // addPet() {
  //   this.pets.push(this.fb.control(''));
  // }
  // ngDoCheck() {
  //   // console.log(this.inputField.errors);
  //   console.log('pets :>> ', this.pets.value);
  // }
  // lesson 47: Practice.
  // initialUser: User = {
  //   name: '',
  //   lastName: '',
  //   email: '',
  //   gender: 'male',
  //   country: 'ru',
  //   comment: '',
  //   agree: true,
  // };
  // user: User = structuredClone(this.initialUser);
  // enableSubmit = signal(false);
  // emailPending = signal(false);
  // @ViewChild('emailRef') emailRef!: NgModel;
  // @ViewChild('userForm') userForm!: NgForm;
  // constructor(
  //   private userService: UserService,
  //   private notificationService: NotificationService,
  //   private destroyRef: DestroyRef,
  // ) {}
  // ngAfterViewInit() {
  //   this.emailRef.valueChanges
  //     ?.pipe(
  //       tap(() => {
  //         this.enableSubmit.set(false);
  //         this.emailPending.set(true);
  //       }),
  //       //! Добавление отсрочки выполнения запроса на сервер до тех пор, пока пользователь не перестанет печатать, хотя бы в течении одной секунды.
  //       debounceTime(1000),
  //       //! Чтобы не подписываться в потоке на поток, используй оператор switchMap, который подключается к внутреннему потоку и передает результат/данные внешнему потоку.
  //       switchMap((email) => {
  //         if (this.emailRef.invalid) {
  //           //! Just emits 'complete', and nothing else.
  //           return EMPTY;
  //         }
  //         return this.userService.checkEmail(email).pipe(
  //           tap((emailTaken) => {
  //             if (emailTaken) {
  //               this.emailRef.control.setErrors({
  //                 emailTaken: true,
  //               });
  //             } else if (this.emailRef.hasError('emailTaken')) {
  //               delete this.emailRef.control.errors?.['emailTaken'];
  //             }
  //             this.emailPending.set(false);
  //           }),
  //         );
  //       }),
  //       catchError(() => {
  //         this.notificationService.error(
  //           'Ошибка при проверке email. Попробуйте позже.',
  //         );
  //         return EMPTY;
  //       }),
  //       combineLatestWith(this.userForm.statusChanges!),
  //       takeUntilDestroyed(this.destroyRef),
  //     )
  //     .subscribe(([emailTaken, formStatus]) => {
  //       this.enableSubmit.set(
  //         !emailTaken && formStatus === 'VALID' && !this.emailPending(),
  //       );
  //     });
  // }
  // checkFieldStatus(field: NgModel) {
  //   return field.invalid && (field.dirty || field.touched);
  // }
  // onSubmit(userForm: NgForm) {
  //   if (!this.enableSubmit()) return;
  //   this.userService.createUser(userForm.value).subscribe({
  //     next: () => {
  //       this.notificationService.success('Пользователь успешно создан.');
  //       userForm.resetForm(this.initialUser);
  //     },
  //     error: () => {
  //       this.notificationService.error(
  //         'Ошибка при создании пользователя. Попробуйте позже.',
  //       );
  //     },
  //   });
  // }
  // lesson 46
  //* директива ngModel для связывания свойств компонента с данными полей формы.
  // username: string = '';
  // @ViewChild('exampleForm') exampleForm!: NgForm;
  // @ViewChild('exampleInput') exampleInput!: NgModel;
  // private cdr = inject(ChangeDetectorRef);
  // ngOnInit() {
  //   setTimeout(() => {
  //     this.username = 'John Doe';
  //     this.cdr.markForCheck();
  //   }, 3000);
  // }
  // ngDoCheck() {
  //   console.log('this.username :>> ', this.username);
  // }
  // ngAfterViewInit() {
  //   this.exampleForm.valueChanges?.subscribe((value) => {
  //     console.log('exampleForm value :>> ', value);
  //   });
  //   this.exampleInput.valueChanges?.subscribe((value) => {
  //     console.log('exampleInput value :>> ', value);
  //   });
  // }
  // onSubmit(formValue: NgForm) {
  //   console.log('formValue :>> ', formValue);
  // }
  // lesson 44
  // private dataService = inject(DataService);
  // ngOnInit() {
  //   this.dataService.getData().subscribe((data) => console.log(data));
  // }
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
  // data = {
  //   one: {
  //     two: {
  //       three: {
  //         title: 'Hello world',
  //       },
  //     },
  //   },
  // };
  // asyncData$ = of(this.data);
  // constructor() {}
  //lesson 40
  // users$: Observable<any>;
  // dataService3 = inject(DataService);
  // constructor(
  //   // private dataService: DataService,
  //   // @Inject(DataService) private dataService2: DataService,
  //   // @Inject(TOKEN) private token: string,
  //   // @Inject(USER_RANDOM_SERVICE_TOKEN) private userRandomService: RandomService,
  //   // @Inject(ADMIN_RANDOM_SERVICE_TOKEN)
  //   // private adminRandomService: RandomService,
  // ) {
  //   this.users$ = this.dataService.getUsers();
  //   console.log('this.token :>> ', this.token);
  //   // console.log('this.dataService :>> ', this.dataService);
  //   // console.log('this.dataService2 :>> ', this.dataService2);
  //   // console.log('this.dataService3 :>> ', this.dataService3);
  //   // console.log('this.userRandomService :>> ', this.userRandomService);
  //   // console.log('this.adminRandomService :>> ', this.adminRandomService);
  // }
}
