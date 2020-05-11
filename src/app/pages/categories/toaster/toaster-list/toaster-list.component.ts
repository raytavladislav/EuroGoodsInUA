import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-toaster-list',
  templateUrl: './toaster-list.component.html',
  styleUrls: ['./toaster-list.component.css']
})
export class ToasterListComponent implements OnInit {

  toasterList: Array<ProductInterface>

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
