import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-mixer-list',
  templateUrl: './mixer-list.component.html',
  styleUrls: ['./mixer-list.component.css']
})
export class MixerListComponent implements OnInit {
  mixerList: Array<ProductInterface>

  constructor(
      private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.getMixers();
  }

  getMixers(): void {
    this.productService.getMixers()
      .subscribe(data => {
        this.mixerList = data;
        },
        error => {
          console.error(error);
        }
      );
  }
}
