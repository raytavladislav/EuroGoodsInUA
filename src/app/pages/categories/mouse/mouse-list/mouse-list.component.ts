import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-mouse-list',
  templateUrl: './mouse-list.component.html',
  styleUrls: ['./mouse-list.component.css']
})
export class MouseListComponent implements OnInit {

  mouseList: Array<ProductInterface>

  constructor(
      private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.getMouses();
  }

  getMouses(): void {
    this.productService.getMouses()
      .subscribe(data => {
        this.mouseList = data;
        },
        error => {
          console.error(error);
        }
      );
  }
}
