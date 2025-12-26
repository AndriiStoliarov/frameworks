import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-content-example',
  standalone: true,
  imports: [],
  templateUrl: './ng-content-example.component.html',
  styleUrl: './ng-content-example.component.scss',
})
export class NgContentExampleComponent {
  className: string = 'NgContentExampleComponent';

  getClassName() {
    console.log('className :>> ', this.className);
  }
}
