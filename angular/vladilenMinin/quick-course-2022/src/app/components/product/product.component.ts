import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '../../models/product';
import {
  CurrencyPipe,
  NgIf,
  NgClass,
  NgStyle,
  DecimalPipe,
} from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: true,
  imports: [CurrencyPipe, DecimalPipe, NgIf, NgClass, NgStyle],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponents {
  @Input() product: IProduct;

  details: boolean = false;
}
