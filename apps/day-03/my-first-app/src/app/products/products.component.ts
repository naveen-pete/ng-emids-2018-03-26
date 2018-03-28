import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  searchText = '';
  discountCode = 'NG-EMIDS';
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 8',
      description: 'Product from Apple',
      price: 60000,
      isAvailable: false
    },
    {
      id: 2,
      name: 'Samsung Galaxy S8',
      description: 'Product from Samsung',
      price: 50000,
      isAvailable: true
    },
    {
      id: 3,
      name: 'Moto G',
      description: 'Product from Motorola',
      price: 30000,
      isAvailable: true
    }
  ];

  onProductCreated(newProduct: Product) {
    this.products.unshift(newProduct);
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
