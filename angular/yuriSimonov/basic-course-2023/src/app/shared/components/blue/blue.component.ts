import { Component } from '@angular/core';
import { RedComponent } from '../red/red.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrl: './blue.component.scss',
  standalone: true,
  imports: [RedComponent, BrowserModule, CommonModule],
})
export class BlueComponent {}
