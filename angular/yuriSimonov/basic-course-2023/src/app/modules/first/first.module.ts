import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [FirstComponent],
})
export class FirstModule {}
