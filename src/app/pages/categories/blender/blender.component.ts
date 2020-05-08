import { Component, OnInit } from '@angular/core';

import { ProductInterface } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-blender',
  templateUrl: './blender.component.html',
  styleUrls: ['./blender.component.css']
})
export class BlenderComponent implements OnInit {
  blenderList: Array<ProductInterface>

  constructor(
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.getBlenders();
  }

  getBlenders(): void {
    // this.grillList = this.productService.getBlenders();
    this.productService.getBlenders()
      .subscribe(data => {
        this.blenderList = data;
        },
        error => {
          console.error(error);
        }
      );
  }
}
