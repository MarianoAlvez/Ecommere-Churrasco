
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { CatalogProductComponent } from './catalog-product/catalog-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImagePipe } from './image.pipe';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@NgModule({
  declarations: [
    CatalogComponent,
    CatalogProductComponent,
    ProductDetailsComponent,
    AddProductComponent,
    ImagePipe

  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [CatalogComponent],
})
export class CatalogModule { }
