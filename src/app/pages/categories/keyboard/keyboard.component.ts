import { Component, OnInit } from '@angular/core';

import { ProductInterface } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  keyboardList: Array<ProductInterface>

  constructor(
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.getKeyboards();
  }

  getKeyboards(): void {
    this.productService.getKeyboards()
      .subscribe(data => {
        this.keyboardList = data;
        },
        error => {
          console.error(error);
        }
      );
  }

}

