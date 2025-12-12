import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  // standalone: true,
  // imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  // "!" - сообщаем typescript, что данное свойство точно будет.
  //! @Input() передавать данные от родителя к дочернему компоненту.
  @Input('childColor') childColorProps!: string;
  // @Input() childColor!: string;
  @Input() name!: string;

  //! @Output() передавать данные от родителя к дочернему компоненту.
  @Output() nameChange = new EventEmitter<string>();

  changeName() {
    this.nameChange.emit('Имя, заданное в дочернем компоненте');
  }
}
