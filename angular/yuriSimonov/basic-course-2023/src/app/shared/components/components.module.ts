import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';
import { GreenComponent } from './green/green.component';
import { YellowComponent } from './yellow/yellow.component';

@NgModule({
  declarations: [RedComponent, BlueComponent, GreenComponent, YellowComponent],
  imports: [CommonModule],
  exports: [RedComponent, BlueComponent, GreenComponent, YellowComponent],
})
export class ComponentsModule {}
