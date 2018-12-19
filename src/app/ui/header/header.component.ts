import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  shopping: number;
  subscription: Subscription; // Ist glaub ich unnötig

  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit() {
    this.subscription = this.shoppingCart.shoppingObs.subscribe(result => {
      this.shopping = result;
    }); 
  }

}
