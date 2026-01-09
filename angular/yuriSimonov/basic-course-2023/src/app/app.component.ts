import {
  Component,
  ElementRef,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewChildren,
  EventEmitter,
  HostBinding,
  HostListener,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { first } from 'rxjs';
import { ChildComponent } from './components/child/child.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom,
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
  // title: string = 'Заголовок';
  // name: string = 'Имя';
  // toggler: boolean = true;
  // obj = { age: 12 };
  // constructor() {
  //   setTimeout(() => {
  //     this.title = 'Другой заголовок';
  //     // this.obj.age = 10;
  //     this.obj = { ...this.obj, age: 10 };
  //   }, 3000);
  // }
  //* lesson 17
  // tittle: string = 'Заголовок';
  // @ViewChild('selector') property: any;
  // @ViewChild('paragraph') paragraph!: ElementRef<HTMLParagraphElement>;
  // @ViewChild('paragraph', { read: ChildComponent })
  // paragraph!: ElementRef<HTMLParagraphElement>;
  // @ViewChild('paragraph', { read: ChildComponent, static: true })
  // paragraph!: ElementRef<HTMLParagraphElement>;
  // @ViewChild('template') template!: TemplateRef<HTMLParagraphElement>;
  // @ViewChild(TemplateRef) template!: TemplateRef<HTMLParagraphElement>;
  // @ViewChild(ChildComponent, { static: true }) component!: ChildComponent;
  // @ViewChildren('paragraph') paragraph!: QueryList<
  //   ElementRef<HTMLParagraphElement>
  // >;
  // @ViewChildren(TemplateRef) template!: QueryList<
  //   TemplateRef<HTMLParagraphElement>
  // >;
  // @ViewChildren('paragraph, ChildComponent')
  // component!: QueryList<ChildComponent>;
  // ngOnInit() {
  //   console.log('component ngOnInit', this.component);
  // }
  // ngAfterViewInit(): void {
  //   console.log('paragraph', this.paragraph);
  //   console.log('template', this.template);
  //   console.log('component', this.component);
  //   this.paragraph.nativeElement.textContent = 'qwerty';
  //   this.component.name = 'child name from parent';
  //   this.component.forEach((item) => console.log('item :>> ', item));
  // }
  // colorProperty: string = 'orange';
  // setColor(newColor: string) {
  //   this.colorProperty = newColor;
  // }
  // @HostBinding('style.background') bgColor = 'transparent';
  // @HostListener('click') handleClick() {
  //   console.log('click from AppComponent');
  // }
  //* lesson 21-22
  // toggler: boolean = true;
  // @ViewChild('example', { read: ViewContainerRef })
  // container!: ViewContainerRef;
  // constructor(private viewContainer: ViewContainerRef) {}
  // showComponent() {
  //   this.viewContainer.createComponent(DynamicComponent);
  // }
  // async asyncShowComponent() {
  //   // const { DynamicComponent } = await import('./components/dynamic/dynamic.component');
  //   this.viewContainer.createComponent(DynamicComponent);
  // }
  // ngAfterViewInit() {
  // const newComponent = this.container.createComponent(DynamicComponent);
  // newComponent.instance.name = 'new name';
  // newComponent.instance.callName();
  // newComponent.setInput('name', 'new name');
  // const someData = newComponent.instance.callName();
  // console.log('someData :>> ', someData);
  // }
}
