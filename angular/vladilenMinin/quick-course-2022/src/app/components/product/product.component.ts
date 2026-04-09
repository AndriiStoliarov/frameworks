import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponents {
  @Input() product: IProduct;
}
