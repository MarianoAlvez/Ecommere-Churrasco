import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { EcommerceCartService } from '../ecommerce-cart/services/ecommerce-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Output() toggleCartVisibility = new EventEmitter<void>();
  @Output() toggleMenu = new EventEmitter<void>();

  itemsCount$ = this.scService.itemsCount$;

  constructor(private scService: EcommerceCartService) {}

  ngOnInit(): void {}

  onCartClicked(): void {
    this.toggleCartVisibility.emit();
  }

  onMenuClicked(): void {
    this.toggleMenu.emit();
  }
}

