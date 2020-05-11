import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BasketService } from 'src/app/core/services/basket/basket.service';


@Component({
  selector: 'app-printer-details',
  templateUrl: './printer-details.component.html',
  styleUrls: ['./printer-details.component.css']
})
export class PrinterDetailsComponent implements OnInit {
  printerId: number;
  printer: ProductInterface;

  private unsubscribe = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getPrinterId();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  setToBasket(): void {
    const printerItemProduct = {
      name: "printer",
      count: 1
    }
    this.basketService.setToBasket(printerItemProduct);
  }

  private getPrinterId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        this.getPrinter(params.printerId);
      }
    )
  }

  private getPrinter(printerId: number): void {
    this.productService.getPrinter(printerId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.printer = data;
      })
  }
}
