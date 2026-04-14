import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent {
  form = new FormGroup({
    title: new FormControl<string>(''),
  });

  submit() {
    console.log(this.form.value);
  }
}
