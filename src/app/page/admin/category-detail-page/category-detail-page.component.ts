import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from 'express';
import { Icategories } from 'src/app/model/categories';
import { Iproduct } from 'src/app/model/product';
import { CategoriesService } from 'src/app/service/categories/categories.service';

@Component({
  selector: 'app-category-detail-page',
  templateUrl: './category-detail-page.component.html',
  styleUrls: ['./category-detail-page.component.css']
})
export class CategoryDetailPageComponent implements OnInit {

  constructor(
    private categoryService: CategoriesService,
    private activatedRoute: ActivatedRoute
  ) { }

  categories!:any;
  products:Iproduct[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (params) {
        // this.product = this.products.find(item => item.id == id)!;
        this.categoryService.get_Product_by_IdCategory(id).subscribe(item => {
          this.categories = item;
        })
      }
    })
  }

}
