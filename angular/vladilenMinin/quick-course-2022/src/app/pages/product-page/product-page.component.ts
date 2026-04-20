import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';
import { AsyncPipe, CommonModule, NgFor, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponents } from '../../components/product/product.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { CreateProductComponent } from '../../components/create-product/create-product.component';
import { FilterProductsPipe } from '../../pipes/filter-products.pipe';
import { IProduct } from '../../models/product';
import { tap } from 'rxjs';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    CommonModule,
    TitleCasePipe,
    FormsModule,
    NgFor,
    ProductComponents,
    ModalComponent,
    CreateProductComponent,
    FilterProductsPipe,
    AsyncPipe,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  title = 'angular app';
  loading = false;
  term: string = '';

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // this.productsService
    //   .getAll()
    //   //оператор tap не изменяет, не трансформирует данные, он добавляет функционал.
    //   .pipe(tap(() => (this.loading = false)));
    this.productsService.getAll().subscribe(() => (this.loading = false));
  }
}
