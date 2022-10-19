import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-products-admin-page',
  templateUrl: './products-admin-page.component.html',
  styleUrls: ['./products-admin-page.component.css']
})
export class ProductsAdminPageComponent implements OnInit {
  products:Iproduct[] = []

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.get_All_Products().subscribe(data => {
      console.log(data)
      this.products = data
    })
  }

  removeItem(id: any) {
    this.productService.remove_Product(id).subscribe(() => {
      // ReRender
      this.products = this.products.filter(item => item.id !== id);
    });
  }


}
