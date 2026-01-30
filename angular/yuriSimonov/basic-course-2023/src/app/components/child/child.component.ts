import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { RandomService } from '../../services/random.service';
import { TOKEN } from '../../shared/tokens/tokens';
import { ChildDirective } from '../../directives/child.directive';
import { ParentDirective } from '../../directives/parent.directive';
// import { GreenComponent } from '../green/green.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [
  //   RandomService,
  //   {
  //     provide: TOKEN,
  //     useValue: 123,
  //   },
  // ],
  imports: [ChildDirective, ParentDirective],
  providers: [RandomService],
})
export class ChildComponent {
  // lesson 41
  //* @Optional() вместо ошибки получаем null в свойстве, через которую получает доступ к внедряемой зависимости.
  // constructor(@Optional() private randomService: RandomService) {
  //   if (this.randomService) {
  //     console.log('randomService :>> ', this.randomService.getRandomNumber());
  //   } else {
  //     console.log('randomService :>> ', this.randomService);
  //   }
  // }
  //* декоратор @Self() сообщает angular, что зависимость нужно искать только в том инжекторе, где она запрашивается. Все родительские инжекторы будут игнорироваться.
  // constructor(@Self() @Optional() private randomService: RandomService) {
  //   if (this.randomService) {
  //     console.log('randomService :>> ', this.randomService.getRandomNumber());
  //   } else {
  //     console.log('randomService :>> ', this.randomService);
  //   }
  // }
  //* декоратор @SkipSelf() является противоположностью декоратора @Self() сообщает angular, что зависимость нужно искать начиная с родителя и выше, а текущий инжектор игнорировать.
  // constructor(@SkipSelf() @Optional() private randomService: RandomService) {
  //   if (this.randomService) {
  //     console.log('randomService :>> ', this.randomService.getRandomNumber());
  //   } else {
  //     console.log('randomService :>> ', this.randomService);
  //   }
  // }
  // constructor(
  //   @SkipSelf() @Optional() private randomService: RandomService,
  //   @Self() @Optional() private localRandomService: RandomService,
  //   @SkipSelf() @Optional() private globalRandomService: RandomService,
  // ) {
  //   // if (this.randomService) {
  //   //   console.log('randomService :>> ', this.randomService.getRandomNumber());
  //   // } else {
  //   //   console.log('randomService :>> ', this.randomService);
  //   // }
  //   console.log('localRandomService :>> ', this.localRandomService);
  //   console.log('globalRandomService :>> ', this.globalRandomService);
  // }
  //* декоратор @Host() сообщает angular, что не нужно искать регистрацию зависимости выше представления родительского компонента.
  constructor(
    @SkipSelf() @Optional() private randomService: RandomService,
    @Self() @Optional() private localRandomService: RandomService,
    @SkipSelf() @Optional() private globalRandomService: RandomService,
  ) {
    // if (this.randomService) {
    //   console.log('randomService :>> ', this.randomService.getRandomNumber());
    // } else {
    //   console.log('randomService :>> ', this.randomService);
    // }
    // console.log('localRandomService :>> ', this.localRandomService);
    // console.log('globalRandomService :>> ', this.globalRandomService);
  }
  // @Input() currentValue!: number;
  // lesson 32
  // @Input() number!: number;
  // lesson 33
  // constructor(private cdr: ChangeDetectorRef) {
  //   this.cdr.detach();
  // }
  // ngDoCheck() {
  //   console.log('ngDoCheck app-child');
  // }
  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     // this.number = 100;
  //     // this.cdr.markForCheck();
  //     this.cdr.detectChanges();
  //   }, 5000);
  //   // this.number = 100;
  //   // this.cdr.detectChanges();
  // }
  // lesson 36
  // @Input() name!: string;
  // constructor(@Attribute('name') public name: string) {}
  // lesson 38
  // constructor(private randomService: RandomService) {
  //   console.log(this.randomService.getRandomNumber());
  // }
  // lesson 40
  // constructor(@Inject(TOKEN) private token: number) {
  //   console.log('this.token :>> ', this.token);
  // }
}
