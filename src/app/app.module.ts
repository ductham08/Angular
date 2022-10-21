import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/user/header/header.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { BannerComponent } from './components/user/banner/banner.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DetailPageComponent } from './page/detail-page/detail-page.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { SwiperModule } from 'swiper/angular';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { HomeAdminPageComponent } from './page/admin/home-admin-page/home-admin-page.component';
import { HomeUserPageComponent } from './page/home-user-page/home-user-page.component';
import { ProductsAdminPageComponent } from './page/admin/products-admin-page/products-admin-page.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { CategoriesAdminPageComponent } from './page/admin/categories-admin-page/categories-admin-page.component';
import { UserAdminPageComponent } from './page/admin/user-admin-page/user-admin-page.component';
import { DashbroadAdminPageComponent } from './page/admin/dashbroad-admin-page/dashbroad-admin-page.component';
import { ProductAddPageComponent } from './page/admin/product-add-page/product-add-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductEditPageComponent } from './page/admin/product-edit-page/product-edit-page.component';
import { CategoryDetailPageComponent } from './page/admin/category-detail-page/category-detail-page.component';
import { CategoryAddPageComponent } from './page/admin/category-add-page/category-add-page.component';
import { CategoryEditPageComponent } from './page/admin/category-edit-page/category-edit-page.component';
import { SignupPageComponent } from './page/signup-page/signup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    HomePageComponent,
    DetailPageComponent,
    ProductPageComponent,
    ContactPageComponent,
    LoginPageComponent,
    HomeAdminPageComponent,
    HomeUserPageComponent,
    ProductsAdminPageComponent,
    NavbarComponent,
    CategoriesAdminPageComponent,
    UserAdminPageComponent,
    DashbroadAdminPageComponent,
    ProductAddPageComponent,
    ProductEditPageComponent,
    CategoryDetailPageComponent,
    CategoryAddPageComponent,
    CategoryEditPageComponent,
    SignupPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
