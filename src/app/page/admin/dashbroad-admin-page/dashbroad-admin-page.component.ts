import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-dashbroad-admin-page',
  templateUrl: './dashbroad-admin-page.component.html',
  styleUrls: ['./dashbroad-admin-page.component.css']
})
export class DashbroadAdminPageComponent implements OnInit {

  constructor(private productService:ProductService ) { }
  New_products:Iproduct[] = []

  ngOnInit(): void {
    this.productService.get_New_product(3).subscribe(data => {
      this.New_products = data
    })

  }

}
