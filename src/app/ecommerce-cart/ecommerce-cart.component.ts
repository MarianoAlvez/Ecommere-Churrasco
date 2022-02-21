import { Component, OnInit } from '@angular/core';
import { CartItem } from './ecommerce-cart-item/cart-item';

@Component({
  selector: 'app-ecommerce-cart',
  templateUrl: './ecommerce-cart.component.html',
  styleUrls: ['./ecommerce-cart.component.css']
})
export class EcommerceCartComponent implements OnInit {

  cartItems: CartItem[] = [
    {
      imageUrl: 'libro1.jpg',
      name: 'Libro 1',
      price: 20,
    },
    {
      imageUrl: 'libro2.jpg',
      name: 'Libro 2',
      price: 15,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
