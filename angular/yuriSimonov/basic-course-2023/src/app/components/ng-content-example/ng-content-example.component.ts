import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-content-example',
  imports: [],
  standalone: true,
  templateUrl: './ng-content-example.component.html',
  styleUrl: './ng-content-example.component.scss',
})
export class NgContentExampleComponent {
  className: string = 'NgContentExampleComponent';

  getClassName() {
    console.log('className :>> ', this.className);
  }
}
