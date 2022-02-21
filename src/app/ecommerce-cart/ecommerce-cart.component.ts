import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartItem } from './ecommerce-cart-item/cart-item';
import {EcommerceCartService} from './services/ecommerce-cart.service';

@Component({
  selector: 'app-ecommerce-cart',
  templateUrl: './ecommerce-cart.component.html',
  styleUrls: ['./ecommerce-cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EcommerceCartComponent implements OnInit {
  cartItems$ = this.ecommercecartService.items$;
  total$ = this.ecommercecartService.total$;

  constructor(private ecommercecartService : EcommerceCartService) {}

  ngOnInit(): void {}

  deleteItem(itemToDelete: CartItem): void {
    this.ecommercecartService.deleteItem(itemToDelete);
  }
}
