import { Directive, Host, Optional } from '@angular/core';
import { RandomService } from '../services/random.service';

@Directive({
  selector: '[appParent]',
  providers: [RandomService],
})
export class ParentDirective {
  constructor(@Optional() private randomService: RandomService) {
    console.log('ParentDirective :>> ', this.randomService);
  }
}
