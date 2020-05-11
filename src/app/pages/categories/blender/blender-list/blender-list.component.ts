import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-blender-list',
  templateUrl: './blender-list.component.html',
  styleUrls: ['./blender-list.component.css']
})
export class BlenderListComponent implements OnInit {
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
