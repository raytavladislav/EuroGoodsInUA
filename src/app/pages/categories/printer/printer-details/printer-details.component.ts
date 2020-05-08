import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


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
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getPrinterId();
  }

  private getPrinterId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        this.getPrinter(params.productId);
      }
    )
  }

  private getPrinter(productId: number): void {
    this.productService.getPrinter(productId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.printer = data;
      })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
