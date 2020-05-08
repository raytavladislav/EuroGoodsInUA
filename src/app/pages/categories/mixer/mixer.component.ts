import { Component, OnInit } from '@angular/core';

import { ProductInterface } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-mixer',
  templateUrl: './mixer.component.html',
  styleUrls: ['./mixer.component.css']
})
export class MixerComponent implements OnInit {
  mixerList: Array<ProductInterface>

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