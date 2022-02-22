
import { CartItem } from 'src/app/ecommerce-cart/ecommerce-cart-item/cart-item';
import { Product } from '../product';

export function mapProductToCartItem(product: Product): CartItem {
  const { imageUrl, name, price } = product;

  return { imageUrl, name, price };
}
