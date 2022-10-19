import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  Top_products:Iproduct[] = []
  New_products:Iproduct[] = []

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.get_Top_product_by_order(3).subscribe(data => {
      this.Top_products = data
    })


    this.productService.get_New_product(1).subscribe(data => {
      this.New_products = data
    })
  }

}
