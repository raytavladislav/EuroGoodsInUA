import { Component, OnInit } from '@angular/core';

import { ProductInterface } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.css']
})
export class PrinterComponent implements OnInit {
  printerList: Array<ProductInterface>

  constructor(
      private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.getPrinters();
  }

  getPrinters(): void {
    this.productService.getPrinters()
      .subscribe(data => {
        this.printerList = data;
        },
        error => {
          console.error(error);
        }
      );
  }

}