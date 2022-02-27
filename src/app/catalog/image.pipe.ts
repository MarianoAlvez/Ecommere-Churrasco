import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'image',
  //pure:false
})
export class ImagePipe implements PipeTransform {

  transform(product: Product): string | string[]  {

    if( !product._id && !product.pictures) {
      return '../../assets/no-image.png';
    } else if ( product.pictures ) {
      return product.pictures;
    } else {
      return `assets/product/${ product._id }.jpg`;
    }
  }

}
