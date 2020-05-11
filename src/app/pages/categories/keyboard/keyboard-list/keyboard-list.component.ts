import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-keyboard-list',
  templateUrl: './keyboard-list.component.html',
  styleUrls: ['./keyboard-list.component.css']
})
export class KeyboardListComponent implements OnInit {

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
