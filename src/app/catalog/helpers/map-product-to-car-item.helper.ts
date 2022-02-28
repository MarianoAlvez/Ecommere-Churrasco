
import { CartItem } from 'src/app/ecommerce-cart/ecommerce-cart-item/cart-item';
import { Product } from '../product';

export function mapProductToCartItem(product: Product): CartItem {
  const { pictures, name, price } = product;

  return { pictures, name, price };
}
