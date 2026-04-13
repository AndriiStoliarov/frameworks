import { TitleCasePipe, NgForOf, AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponents } from './components/product/product.component';
import { IProduct } from './models/product';
import { ProductsService } from './models/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, ProductComponents, NgForOf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'angular app';
  products$: Observable<IProduct[]>;
  // products: IProduct[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getAll();
    // this.productsService.getAll().subscribe((products) => {
    //   this.products = products;
    // });
  }
}
