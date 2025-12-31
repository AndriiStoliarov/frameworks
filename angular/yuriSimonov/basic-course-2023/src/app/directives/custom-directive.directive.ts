import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { EventEmitter } from 'stream';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirectiveDirective {
  @Input('color') colorProps!: string;
  @Input('appCustomDirective') appCustomDirectiveProps!: string;

  @Output() colorChange = new EventEmitter();

  //* класс ElementRef служит для типизации обычных html-элементов.
  //! security risk
  constructor(private element: ElementRef) {
    console.log('appCustomDirective');
    console.log('element :>> ', this.element);

    this.element.nativeElement.style.color = 'red';
  }

  @HostBinding('style.color') color: string = 'lime';
  @HostBinding('attr.color') attr: string = 'lime';
  @HostBinding('class.color') class: boolean = true;
  @HostBinding('style.background') bgColor = 'transparent';

  // @HostBinding('style.color') color = null;
  // @HostBinding('attr.color') attr = undefined;
  // @HostBinding('class.color') class = false;

  //* используется для отслеживания различных событий DOM-дерева.
  // @HostListener('document:click', ['$event.target']) handleClick(data: any) {
  //   // console.log('click!');
  //   console.log('data :>> ', data);
  // }

  @HostListener('click') handleClick() {
    this.getRandomColor();
  }

  @HostListener('mouseenter') handleMouseenter() {
    this.bgColor = 'orange';
  }

  @HostListener('mouseleave') handleMouseleave() {
    this.bgColor = 'transparent';
  }

  ngOnChanges() {
    console.log('colorProps :>> ', this.colorProps);
    console.log('appCustomDirectiveProps :>> ', this.appCustomDirectiveProps);

    this.bgColor = this.appCustomDirectiveProps;
  }

  getRandomColor() {
    const newColor =
      '#' +
      (Math.random().toString(16) + '000000')
        .substring(2, 8)
        .toLocaleUpperCase();

    this.colorChange.emit(newColor);
  }
}
