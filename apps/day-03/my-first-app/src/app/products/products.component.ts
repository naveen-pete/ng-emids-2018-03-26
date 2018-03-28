import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  searchText = '';
  discountCode = 'NG-EMIDS';
  products: Product[] = [];

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onProductCreated(newProduct: Product) {
    this.products.unshift(newProduct);

    this.loggerService.log('Products -> New product added to the list.');
  }

  onChangeFirst() {
    if (this.products.length > 0) {
      this.products[0].name = 'New ' + this.products[0].name;
    } else {
      console.log('No products in the list.');
    }
  }

  onDeleteFirst() {
    if (this.products.length > 0) {
      this.products.splice(0, 1);
    } else {
      console.log('No products in the list.');
    }
  }
}
