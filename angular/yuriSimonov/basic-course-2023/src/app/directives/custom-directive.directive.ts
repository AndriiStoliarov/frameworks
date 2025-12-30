import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirectiveDirective {
  // класс ElementRef служит для типизации обычных html-элементов.
  //! security risk
  constructor(private element: ElementRef) {
    console.log('appCustomDirective');
    console.log('element :>> ', this.element);

    this.element.nativeElement.style.color = 'red';
  }

  // @HostBinding('style.color') color: string = 'lime';
  // @HostBinding('attr.color') attr: string = 'lime';
  // @HostBinding('class.color') class: boolean = true;

  @HostBinding('style.color') color = null;
  @HostBinding('attr.color') attr = undefined;
  @HostBinding('class.color') class = false;
}
