import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product();
  showMessage = false;
  @Output() productCreated: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {}

  ngOnInit() {}

  onSave() {
    console.log('Save button clicked!');
    console.log(this.product);
    this.productCreated.emit(this.product);

    this.product = new Product();
    this.showMessage = true;

    // const component = this;

    // setTimeout(
    //   function() {
    //     console.log(this);
    //     this.showMessage = false;
    //   }.bind(this),
    //   3000
    // );

    setTimeout(() => {
      console.log(this);
      this.showMessage = false;
    }, 3000);
  }
}
