import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/model/product';
import { FormControl,FormGroup, NgForm, Validator } from '@angular/forms';
import { ProductService } from 'src/app/service/product/product.service';
import { CategoriesService } from 'src/app/service/categories/categories.service';
import { Icategories } from 'src/app/model/categories';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { data } from 'cheerio/lib/api/attributes';

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
    categoryId: new FormControl(''),
    desc: new FormControl(''),
    order: new FormControl(''),
  })

  


  constructor(
    private activateRouter:ActivatedRoute,
    private categoryService: CategoriesService,
    private productService:ProductService,
    private httpClient:HttpClient,
    private router: Router,
  ) { }
  url_img:String = '';

  ngOnInit(): void {
    this.categoryService.get_All_Categories().subscribe(data => {
      this.categories = data
    })

    this.activateRouter.params.subscribe(params => {
      const id = params['id'];
      this.productService.get_Product(id).subscribe(item => {
        this.product = item;
        this.url_img = item['image']
      })
    })

  }
  

  
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
    const product_new:any = {
      name: this.product.name,
      image: this.url_img,
      price: this.product.price,
      desc: this.product.desc,
      order: this.product.order,
      categoryId: this.product.categoryId,
      createAt: this.product.createAt,
    }

    console.log(product_new);
    console.log(this.product);
    console.log(this.url_img);
    const id = this.product.id

    this.productService.edit_Product(product_new,id).subscribe(data => {
      this.router.navigateByUrl('/admin/products');
    })
  }
}
