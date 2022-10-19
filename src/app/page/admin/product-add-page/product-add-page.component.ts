import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, NgForm, Validator } from '@angular/forms';
import { data } from 'cheerio/lib/api/attributes';
import { Icategories } from 'src/app/model/categories';
import { Iproduct } from 'src/app/model/product';
import { CategoriesService } from 'src/app/service/categories/categories.service';
import { ImageService } from 'src/app/service/image/image.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-add-page',
  templateUrl: './product-add-page.component.html',
  styleUrls: ['./product-add-page.component.css']
})
export class ProductAddPageComponent implements OnInit {
  categories:Icategories[] = [];

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    image: new FormControl(''),
    desc: new FormControl(''),
  })

  
  constructor( 
    private categoryService: CategoriesService,
    private productService:ProductService,
    private imageService:ImageService
  ) { }

  ngOnInit(): void {
    this.categoryService.get_All_Categories().subscribe(data => {
      this.categories = data
    })
  }

  img = document.getElementById('file')

  upload_file(){
      if (this.productForm.value.image) {
        const res = this.imageService.upload_Image(this.productForm.value.image).subscribe(data => {
          console.log("data:"  + data)
        })
        console.log("res" + res)
      } else {
          // return ''
      }
  }

  onHandleAdd() {
    console.log(this.productForm.value.image);
    this.productService.add_Product(this.productForm.value).subscribe(data => {
      console.log("Thanh cong")
    })
  }

  
}
