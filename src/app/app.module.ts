import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

import { UiModule } from './ui/ui.module';
import { HomeComponent } from './components/home/home.component';
import { ProductOverviewComponent } from './components/products/product-overview/product-overview.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/products/product-item-detail/product-item-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

import { ProductsService } from "./shared/services/products.service";
import { ShoppingCartService } from "./shared/services/shopping-cart.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductOverviewComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    UiModule
  ],
  providers: [
    ProductsService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
