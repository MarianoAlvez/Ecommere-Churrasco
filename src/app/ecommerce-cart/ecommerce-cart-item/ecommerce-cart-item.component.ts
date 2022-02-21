import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from './cart-item';
@Component({
  selector: 'app-ecommerce-cart-item',
  templateUrl: './ecommerce-cart-item.component.html',
  styleUrls: ['./ecommerce-cart-item.component.css']
})
export class EcommerceCartItemComponent implements OnInit {

  @Input() cartItem!: CartItem;

  @Output() cartItemDelete = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onDeleteClicked(): void {
    this.cartItemDelete.emit();
  }

}
