import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceCartItemComponent } from './ecommerce-cart-item.component';

describe('EcommerceCartItemComponent', () => {
  let component: EcommerceCartItemComponent;
  let fixture: ComponentFixture<EcommerceCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceCartItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
