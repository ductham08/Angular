import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, NgForm, Validator } from '@angular/forms';
import { Icategories } from 'src/app/model/categories';
import { CategoriesService } from 'src/app/service/categories/categories.service';
import { ProductService } from 'src/app/service/product/product.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


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
    categoryId: new FormControl(''),
    desc: new FormControl(''),
    order: new FormControl(''),
  })

  
  constructor( 
    private categoryService: CategoriesService,
    private productService:ProductService,
    private httpClient:HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.categoryService.get_All_Categories().subscribe(data => {
      this.categories = data
    })
  }

  url_img:String = '';


  changeFile(event: any) {
    const CLOUDINARY_NAME = "ductham087";
    const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`;
    const CLOUDINARY_PRESET = "upload_images";

    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", CLOUDINARY_PRESET);

    const res = this.httpClient.post(CLOUDINARY_API, formData).subscribe((data:any) => {
      console.log(data['url']);
      return this.url_img = data['url']
  })
  }


  onHandleAdd() {
    const product:any = {
      name: this.productForm.value.name,
      image: this.url_img,
      price: this.productForm.value.price,
      desc: this.productForm.value.desc,
      order: 0,
      categoryId: this.productForm.value.categoryId
    }

    console.log(product)

    this.productService.add_Product(product).subscribe(data => {
      this.router.navigateByUrl('/admin/products');
    })
  }

  
}
