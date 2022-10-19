import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoriesService } from 'src/app/service/categories/categories.service';
import { ImageService } from 'src/app/service/image/image.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-category-add-page',
  templateUrl: './category-add-page.component.html',
  styleUrls: ['./category-add-page.component.css']
})
export class CategoryAddPageComponent implements OnInit {

  constructor(
    private categoryService: CategoriesService,
    private productService:ProductService,
    private imageService:ImageService
  ) { }

  categoryForm = new FormGroup({
    name: new FormControl(''),
  })

  ngOnInit(): void {
  }

  onHandleAdd() {
    this.categoryService.add_Category(this.categoryForm.value).subscribe(data => {
      console.log("Thanh cong")
    })
  }

}
