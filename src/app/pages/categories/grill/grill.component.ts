import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-grill',
  templateUrl: './grill.component.html',
  styleUrls: ['./grill.component.css']
})
export class GrillComponent implements OnInit {
  grillList: Array<Product>

  constructor(
      private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.getGrills();
  }

  getGrills(): void {
    this.productService.getGrills()
      .subscribe(data => {
        this.grillList = data;
        },
        error => {
          console.error(error);
        }
      );
  }

}