import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-grill-list',
  templateUrl: './grill-list.component.html',
  styleUrls: ['./grill-list.component.css']
})
export class GrillListComponent implements OnInit {
  
  grillList: Array<ProductInterface>

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
