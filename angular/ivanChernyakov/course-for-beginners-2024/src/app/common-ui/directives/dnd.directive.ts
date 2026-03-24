import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[dnd]',
  standalone: true,
})
export class DndDirective {
  @Output() fileDropped = new EventEmitter<File>();

  @HostBinding('class.fileover') fileover: boolean = false;

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.fileover = true;
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.fileover = false;
  }
  @HostListener('drop', ['$event']) onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.fileover = false;
    this.fileDropped.emit(event.dataTransfer?.files[0]);
  }
}
