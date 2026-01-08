import { Component } from '@angular/core';
import { RedComponent } from '../red/red.component';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrl: './blue.component.scss',
  standalone: true,
  imports: [NgClass],
})
export class BlueComponent {}
