import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-loud-speaker-list',
  templateUrl: './loud-speaker-list.component.html',
  styleUrls: ['./loud-speaker-list.component.css']
})
export class LoudSpeakerListComponent implements OnInit {
  loudSpeakerList: Array<ProductInterface>

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
