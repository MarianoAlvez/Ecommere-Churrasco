import { CatalogService } from './../catalog.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  image:string = '../../../assets/no-image.png';

  addProductForm = new FormGroup({
    name: new FormControl ('Libro', [ Validators.required ]),
    description: new FormControl ('El Mejor', [ Validators.required ]),
    SKU: new FormControl ('655582', [ Validators.required ]),
    code: new FormControl ('68975', [ Validators.required ]),
    pictures: new FormControl ('https://acortar.link/qk8CUk', [ Validators.required ]),
    price: new FormControl ('10', [ Validators.required ]),
    currency: new FormControl ('ARS', [ Validators.required ]),
    __v: new FormControl ('0', [  ]),
  });

  get nameControl(): FormControl {
    return this.addProductForm.get('name') as FormControl;
  }

  get descriptionControl(): FormControl {
    return this.addProductForm.get('description') as FormControl;
  }
  get SKUControl(): FormControl {
    return this.addProductForm.get('SKU') as FormControl;
  }
  get codeControl(): FormControl {
    return this.addProductForm.get('name') as FormControl;
  }
  get pictureControl(): FormControl {
    return this.addProductForm.get('name') as FormControl;
  }
  get priceControl(): FormControl {
    return this.addProductForm.get('name') as FormControl;
  }
  get currencyControl(): FormControl {
    return this.addProductForm.get('name') as FormControl;
  }
  get __vControl(): FormControl {
  return this.addProductForm.get('v') as FormControl;
}

  currency_list = [
    {
      id: '$',
      desc: 'ARS',
    },
    {
      id: 'USD',
      desc: 'US - DOLLAR',
    },
    {
      id: '€',
      desc: 'EURO',
    }

  ];

  product: Product = {
    _id:'',
    SKU:'',
    code:0,
    name:'',
    description:'',
    pictures:[],
    price:0 ,
    currency:'',
    __v:'__v',
  }

  constructor(private catalogService: CatalogService,
              private fb: FormBuilder
              ) {}




  ngOnInit(): void {

  }

  addProduct(): void {
    const productItems = this.addProductForm.value;
    //this.addProductForm.markAsPending();
    this.catalogService.addProduct$(productItems).subscribe(
      res => {
        console.log('response', res);
        console.log(this.product.pictures);
        //console.log(this.addProductForm.value);
    });
     // error: () => this.addProductForm.setErrors({ invalidCredentials: true }),
    //});
  }
}
