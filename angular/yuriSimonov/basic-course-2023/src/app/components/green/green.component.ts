import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-green',
  standalone: true,
  imports: [],
  templateUrl: './green.component.html',
  styleUrl: './green.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreenComponent {
  // lesson 52
  constructor(private randomService: RandomService) {
    console.log('GreenComponent :>> ', this.randomService);
  }
  // color: string = 'green';

  // ngAfterViewInit() {
  //   this.color = 'pink';
  // }
}
