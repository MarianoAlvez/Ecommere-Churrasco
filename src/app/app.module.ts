import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EcommerceCartComponent } from './ecommerce-cart/ecommerce-cart.component';
import { EcommerceCartItemComponent } from './ecommerce-cart/ecommerce-cart-item/ecommerce-cart-item.component';
import { HeaderComponent } from './header/header.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { AuthHeaderInterceptor } from './auth/auth-header.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CatalogModule } from './catalog/catalog.module';
import { AuthModule } from './auth/auth.module';
import { LoggingInterceptor } from './logging.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceCartComponent,
    EcommerceCartItemComponent,
    HeaderComponent,
    NavDrawerComponent
  ],
  imports: [
    BrowserModule,
    //EcommerceCartModule,
    CatalogModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

