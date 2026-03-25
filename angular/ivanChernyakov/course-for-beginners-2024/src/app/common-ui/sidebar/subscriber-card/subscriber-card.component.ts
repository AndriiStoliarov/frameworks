import { Component, Input, SimpleChanges } from '@angular/core';
import { Profile } from '../../../data/interfaces/profile.interface';
import { ImgUrlPipe } from '../../../helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-subscriber-card',
  standalone: true,
  imports: [ImgUrlPipe],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss',
})
export class SubscriberCardComponent {
  @Input() profile!: Profile;

  // constructor() {
  //   console.log('constructor - profile :>> ', this.profile);
  // }

  ngOnInit(changes: SimpleChanges) {
    console.log('changes :>> ', changes);
    console.log('ngOnInit - profile :>> ', this.profile);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes :>> ', changes);
    console.log('ngChChanges - profile :>> ', this.profile);
  }

  ngAfterViewInit(changes: SimpleChanges) {
    console.log('changes :>> ', changes);
    console.log('ngAfterViewInit - profile :>> ', this.profile);
  }
}
