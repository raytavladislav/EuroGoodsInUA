import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {
  mixerList: Array<Product>

  constructor(
      private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.getMixers();
  }

  getMixers(): void {
    this.productService.getMixers()
      .subscribe(data => {
        this.mixerList = data;
        },
        error => {
          console.error(error);
        }
      );
  }

}
