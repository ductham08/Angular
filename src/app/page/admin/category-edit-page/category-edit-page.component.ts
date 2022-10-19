import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Icategories } from 'src/app/model/categories';
import { CategoriesService } from 'src/app/service/categories/categories.service';
import { ImageService } from 'src/app/service/image/image.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-category-edit-page',
  templateUrl: './category-edit-page.component.html',
  styleUrls: ['./category-edit-page.component.css']
})
export class CategoryEditPageComponent implements OnInit {
  
  categoryForm = new FormGroup({
    name: new FormControl(''),
  })

  category:any;

  constructor(
    private categoryService: CategoriesService,
    private productService:ProductService,
    private imageService:ImageService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (params) {
        // this.product = this.products.find(item => item.id == id)!;
        this.categoryService.get_Categories(id).subscribe(item => {
          this.category = item;
          console.log(this.category)
        })
      }
    });
  }

  onHandleAdd() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (params) {
        // this.product = this.products.find(item => item.id == id)!;
        this.categoryService.edit_Category(id,this.categoryForm.value).subscribe(data => {
          console.log("Thanh cong")
        })
      }
    });
   
  }
}
