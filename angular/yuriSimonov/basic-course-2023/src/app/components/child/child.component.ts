import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { NgContentExampleComponent } from '../ng-content-example/ng-content-example.component';

@Component({
  selector: 'app-child',
  // standalone: true,
  // imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
// implements
//   OnChanges,
//   OnInit,
//   DoCheck,
//   AfterContentInit,
//   AfterContentChecked,
//   AfterViewInit,
//   AfterViewChecked,
//   OnDestroy
export class ChildComponent {
  // "!" - сообщаем typescript, что данное свойство точно будет.
  //! @Input() передавать данные от родителя к дочернему компоненту.
  // @Input('childColor') childColorProps!: string;
  // @Input() childColor!: string;
  // @Input() name!: string;
  //! @Output() передавать данные от дочернего компонента к родительскому.
  // @Output() nameChange = new EventEmitter<string>();
  // changeName() {
  //   this.nameChange.emit('Имя, заданное в дочернем компоненте');
  // }
  //* lesson 16
  // @Input() title!: string;
  // @Input() name!: string;
  // @Input() obj!: any;
  // text: string = 'Какой-то текст';
  // constructor() {
  //   console.log(
  //     '%c Компонент app-child успешно создан!',
  //     'background: darkgreen'
  //   );
  // }
  //! метод вызывается когда данные передаюся с помощь декоратора @Input; при изменении и установки входных свойств компонента.
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('%c ngOnChanges', 'color: aqua');
  //   console.log('changes', changes);
  // }
  //! метод вызывается когда angular проверит все свойства связанные с данными
  // ngOnInit(): void {
  //   console.log('%c ngOnInit', 'color: deepskyblue');
  // }
  //! метод вызывается при любых изменениях в компоненте
  // ngDoCheck(): void {
  //   console.log('%c ngDoCheck', 'color: pink');
  // }
  //! метод вызывается один раз после инициализации всего содержимого, которое заключено между его тегами в месте вызова его компонента.
  // ngAfterContentInit(): void {
  //   console.log('%c ngAfterContentInit', 'color: lightgreen');
  // }
  //! метод вызывается после того, как механизм отслеживания изменений завершил проверку всего содержимого, которое заключено между его тегами в месте вызова его компонента.
  // ngAfterContentChecked(): void {
  //   console.log('%c ngAfterContentChecked', 'color: green');
  // }
  //! метод вызывается единожды после того, как angular полностью инициализирует представление (содержимое шаблона, включая шаблоны других компонентов, которые в нем присутствуют) компонента.
  // ngAfterViewInit(): void {
  //   console.log('%c ngAfterViewInit', 'color: yellow');
  //   setTimeout(() => console.log('title внутри setTimeout'));
  //   // this.title = '123';
  //   setTimeout(() => {
  //     this.title = '123';
  //   });
  // }
  //! метод вызывается после того, как механизм отслеживания изменений завершил проверку представления (содержимое шаблона, включая шаблоны других компонентов, которые в нем присутствуют) компонента на наличие изменений.
  // ngAfterViewChecked(): void {
  //   console.log('%c ngAfterViewChecked', 'color: orange');
  // }
  //! метод вызывается во время удаления компонента из DOM-дерева.
  // ngOnDestroy(): void {
  //   console.log('%c ngOnDestroy', 'color: red');
  // }
  // title: string = 'child title';
  // name: string = 'child name';
  // @ContentChild('selector') propertyName: dataType;
  // @ContentChild('tag') paragraph!: ElementRef<HTMLParagraphElement>;
  // @ContentChild('tag', { static: true })
  // paragraph!: ElementRef<HTMLParagraphElement>;
  @ContentChild('tag', { read: TemplateRef })
  paragraph!: ElementRef<HTMLParagraphElement>;
  @ContentChild(TemplateRef) template!: TemplateRef<HTMLParagraphElement>;
  // @ContentChild(NgContentExampleComponent)
  // component!: NgContentExampleComponent;
  @ContentChild('descendants', { descendants: false })
  component!: NgContentExampleComponent;
  @ContentChildren(NgContentExampleComponent)
  allChildren!: QueryList<NgContentExampleComponent>;

  ngOnInit() {
    this.paragraph && console.log('ngOnInit paragraph :>> ', this.paragraph);
  }

  ngAfterContentInit() {
    // this.paragraph && console.log('paragraph :>> ', this.paragraph);
    // this.template && console.log('template :>> ', this.template);
    // this.component && console.log('component :>> ', this.component);

    this.allChildren && console.log('allChildren :>> ', this.allChildren);

    this.component?.getClassName();
  }
}
