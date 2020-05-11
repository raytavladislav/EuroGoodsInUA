import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-printer-list',
  templateUrl: './printer-list.component.html',
  styleUrls: ['./printer-list.component.css']
})
export class PrinterListComponent implements OnInit {

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
