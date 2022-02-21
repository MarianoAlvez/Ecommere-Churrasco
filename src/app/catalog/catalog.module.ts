import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { CatalogProductComponent } from './catalog-product/catalog-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    CatalogComponent,
    CatalogProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  exports: [CatalogComponent],
})
export class CatalogModule { }
