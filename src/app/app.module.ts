import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

import { ShopOverviewComponent } from './shop-overview/shop-overview.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { ShopItemDetailsComponent } from './shop-item-details/shop-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopOverviewComponent,
    ShopItemComponent,
    ShopItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
