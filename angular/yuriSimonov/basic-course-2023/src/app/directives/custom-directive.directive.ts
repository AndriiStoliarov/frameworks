import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponent } from '../components/dynamic/dynamic.component';
// import { EventEmitter } from 'stream';

@Directive({
  selector: '[appCustomDirective]',
  exportAs: 'custom',
})
export class CustomDirectiveDirective {
  // @Input('color') colorProps!: string;
  // @Input('appCustomDirective') appCustomDirectiveProps!: string;
  // @Output() colorChange = new EventEmitter();
  //* класс ElementRef служит для типизации обычных html-элементов.
  //! security risk
  // constructor(private element: ElementRef) {
  //   console.log('appCustomDirective');
  //   console.log('element :>> ', this.element);
  //   this.element.nativeElement.style.color = 'red';
  // }
  // @HostBinding('style.color') color: string = 'lime';
  // @HostBinding('attr.color') attr: string = 'lime';
  // @HostBinding('class.color') class: boolean = true;
  // @HostBinding('style.background') bgColor = 'transparent';
  // @HostBinding('style.color') color = null;
  // @HostBinding('attr.color') attr = undefined;
  // @HostBinding('class.color') class = false;
  //* используется для отслеживания различных событий DOM-дерева.
  // @HostListener('document:click', ['$event.target']) handleClick(data: any) {
  //   // console.log('click!');
  //   console.log('data :>> ', data);
  // }
  // @HostListener('click') handleClick() {
  //   this.getRandomColor();
  // }
  // @HostListener('mouseenter') handleMouseenter() {
  //   this.bgColor = 'orange';
  // }
  // @HostListener('mouseleave') handleMouseleave() {
  //   this.bgColor = 'transparent';
  // }
  // ngOnChanges() {
  //   console.log('colorProps :>> ', this.colorProps);
  //   console.log('appCustomDirectiveProps :>> ', this.appCustomDirectiveProps);
  //   this.bgColor = this.appCustomDirectiveProps;
  // }
  // getRandomColor() {
  //   const newColor =
  //     '#' +
  //     (Math.random().toString(16) + '000000')
  //       .substring(2, 8)
  //       .toLocaleUpperCase();
  //   this.colorChange.emit(newColor);
  //   return newColor;
  // }
  //* lesson 21
  // @Input() appCustomDirective: any;
  // @Input() appCustomDirectiveHello: any;

  // time!: Date;

  // constructor(
  //   private template: TemplateRef<any>,
  //   private viewContainer: ViewContainerRef
  // ) {}

  // ngOnInit() {
  //   this.viewContainer.createEmbeddedView(this.template);
  // }

  // ngOnChanges() {
  //   console.log('this.hello :>> ', this.appCustomDirectiveHello);
  //   this.time = new Date();
  //   this.appCustomDirective
  //     ? this.viewContainer.createEmbeddedView(this.template, {
  //         time: this.time,
  //       })
  //     : this.viewContainer.clear();
  // }

  //* lesson 22
  constructor(private viewContainer: ViewContainerRef) {}

  ngOnInit() {
    this.viewContainer.createComponent(DynamicComponent);
  }
}
