import { Component, OnInit } from '@angular/core';
import { Icategories } from 'src/app/model/categories';
import { Iproduct } from 'src/app/model/product';
import { CategoriesService } from 'src/app/service/categories/categories.service';

@Component({
  selector: 'app-categories-admin-page',
  templateUrl: './categories-admin-page.component.html',
  styleUrls: ['./categories-admin-page.component.css']
})
export class CategoriesAdminPageComponent implements OnInit {
  categories:Icategories[] = []

  constructor(
    private categoriesService:CategoriesService,
  ) { }

  ngOnInit(): void {
    this.categoriesService.get_Product_by_category().subscribe(data => {
      this.categories = data
      console.log(data)
    })
  }

  removeItem(id: any) {
    this.categoriesService.remove_Category(id).subscribe(() => {
      // ReRender
      this.categories = this.categories.filter(item => item.id != id);
    });
  }
}
