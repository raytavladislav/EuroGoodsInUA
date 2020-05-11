import { Component, OnInit, OnDestroy } from '@angular/core';
import { BasketService } from 'src/app/core/services/basket/basket.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, OnDestroy {
  basketList;
  
  private unsubscribe = new Subject();

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.getBasketList();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getBasketList(): void {
    this.basketService.basket.pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      console.log(data);
    });
  }

}
