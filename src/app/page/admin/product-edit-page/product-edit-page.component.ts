import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/model/product';
import { FormControl,FormGroup, NgForm, Validator } from '@angular/forms';
import { ProductService } from 'src/app/service/product/product.service';
import { CategoriesService } from 'src/app/service/categories/categories.service';
import { Icategories } from 'src/app/model/categories';

@Component({
  selector: 'app-product-edit-page',
  templateUrl: './product-edit-page.component.html',
  styleUrls: ['./product-edit-page.component.css']
})
export class ProductEditPageComponent implements OnInit {
  product!:Iproduct ;
  categories:Icategories[] = [];

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    image: new FormControl(''),
    desc: new FormControl(''),
  })

  constructor(
    private activateRouter:ActivatedRoute,
    private productService:ProductService,
    private categoryService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.categoryService.get_All_Categories().subscribe(data => {
      this.categories = data
    })

    this.activateRouter.params.subscribe(params => {
      const id = params['id'];
      this.productService.get_Product(id).subscribe(item => {
        this.product = item;
    })
    })
  }

  
  onHandleAdd() {
    console.log(this.productForm.value.image);
    this.productService.add_Product(this.productForm.value).subscribe(data => {
      console.log("Thanh cong")
    })
  }
}
