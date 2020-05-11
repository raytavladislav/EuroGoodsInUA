import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-headphone-list',
  templateUrl: './headphone-list.component.html',
  styleUrls: ['./headphone-list.component.css']
})
export class HeadphoneListComponent implements OnInit {
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
