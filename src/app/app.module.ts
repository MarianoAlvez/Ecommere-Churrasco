import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EcommerceCartComponent } from './ecommerce-cart/ecommerce-cart.component';
import { EcommerceCartItemComponent } from './ecommerce-cart/ecommerce-cart-item/ecommerce-cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceCartComponent,
    EcommerceCartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
