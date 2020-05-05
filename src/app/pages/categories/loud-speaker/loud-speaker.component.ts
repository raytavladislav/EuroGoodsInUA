import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-loud-speaker',
  templateUrl: './loud-speaker.component.html',
  styleUrls: ['./loud-speaker.component.css']
})
export class LoudSpeakerComponent implements OnInit {
  loudSpeakerList: Array<Product>

  constructor(
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.getLoudSpeakers();
  }

  getLoudSpeakers(): void {
    this.productService.getLoudSpeakers()
      .subscribe(data => {
        this.loudSpeakerList = data;
        },
        error => {
          console.error(error);
        }
      );
  }

}