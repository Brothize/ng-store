import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../../shared/services/products.service";
import { Product } from '../../../shared/classes/product';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

  anzahlKalender: number;
  anzahlHandy: number;
  anzahlWand: number;
  anzahlPolo: number;

  productsArray: Product[];

  constructor(
    public products: ProductsService,
    public shoppingCart: ShoppingCartService
    ) { }

  ngOnInit() {
    this.productsArray = this.products.products();
    this.anzahlKalender = this.shoppingCart.anKalender();
    this.anzahlHandy = this.shoppingCart.anHandy();
    this.anzahlPolo = this.shoppingCart.anPolo();
    this.anzahlWand = this.shoppingCart.anWand();
    this.shoppingCart.updateShopping();
  }

  getUp(name: string){
    this.shoppingCart.getUp(name);
    this.anzahlKalender = this.shoppingCart.anKalender();
    this.anzahlHandy = this.shoppingCart.anHandy();
    this.anzahlPolo = this.shoppingCart.anPolo();
    this.anzahlWand = this.shoppingCart.anWand();
    this.shoppingCart.updateShopping();
  }
  getDown(name: string){
    this.shoppingCart.getDown(name);
    this.anzahlKalender = this.shoppingCart.anKalender();
    this.anzahlHandy = this.shoppingCart.anHandy();
    this.anzahlPolo = this.shoppingCart.anPolo();
    this.anzahlWand = this.shoppingCart.anWand();
    this.shoppingCart.updateShopping();
  }
}
