import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  product!:Iproduct 

  constructor(private activateRouter:ActivatedRoute, private serviceProduct: ProductService) {}

  ngOnInit(): void {
    this.activateRouter.params.subscribe(params => {
      const id = params['id'];
      this.serviceProduct.get_Product(id).subscribe(data => {
        this.product = data
      })
    })
  }



}
