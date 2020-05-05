import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {
  toasterList: Array<Product>

  constructor(
      private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.getToasters();
  }

  getToasters(): void {
    this.productService.getToasters()
      .subscribe(data => {
        this.toasterList = data;
        },
        error => {
          console.error(error);
        }
      );
  }

}