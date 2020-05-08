import { Component, OnInit } from '@angular/core';

import { ProductInterface } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-headphone',
  templateUrl: './headphone.component.html',
  styleUrls: ['./headphone.component.css']
})
export class HeadphoneComponent implements OnInit {
  headphoneList: Array<ProductInterface>

  constructor(
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.getHeadphones();
  }

  getHeadphones(): void {
    // this.grillList = this.productService.getGrills();
    this.productService.getHeadphones()
      .subscribe(data => {
        this.headphoneList = data;
        },
        error => {
          console.error(error);
        }
      );
  }

}