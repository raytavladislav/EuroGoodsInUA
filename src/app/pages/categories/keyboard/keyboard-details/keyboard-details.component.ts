import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-keyboard-details',
  templateUrl: './keyboard-details.component.html',
  styleUrls: ['./keyboard-details.component.css']
})
export class KeyboardDetailsComponent implements OnInit {
  keyboardId: number;
  keyboard: ProductInterface;

  private unsubscribe = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getKeyboardId();
  }

  private getKeyboardId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        this.getKeyboard(params.productId);
      }
    )
  }

  private getKeyboard(productId: number): void {
    this.productService.getKeyboard(productId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (data) =>{
        this.keyboard = data;
      })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
