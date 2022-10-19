import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products:Iproduct[] = [];
  searchForm= new FormGroup({
    textSearch: new FormControl('')
  })

  ngOnInit(): void {
    this.productService.get_All_Products().subscribe(data => {
      this.products = data
    })
  }

  onHandleSearch(inputElement: HTMLInputElement){
    setTimeout(() => {
      this.productService.search_Product(this.searchForm.value.textSearch).subscribe(dataSearch => {
        this.products = dataSearch
      })
    }, 0,5);
  }

}
