import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopAlertBarComponent } from './components/top-alert-bar/top-alert-bar.component';
import { TopMiddleSectionComponent } from './components/top-middle-section/top-middle-section.component';
import { TopMenuSectionComponent } from './components/top-menu-section/top-menu-section.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { BelowSliderComponent } from './components/below-slider/below-slider.component';
import { ProductsSectionComponent } from './components/products-section/products-section.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PopularItemsComponent } from './components/popular-items/popular-items.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopAlertBarComponent,
    TopMiddleSectionComponent,
    TopMenuSectionComponent,
    HeaderComponent,
    SliderComponent,
    BelowSliderComponent,
    ProductsSectionComponent,
    FeaturedProductComponent,
    CategoriesComponent,
    PopularItemsComponent,
    BlogsComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
