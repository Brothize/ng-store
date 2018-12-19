import { Injectable } from '@angular/core';
import { Product } from "../classes/product";

@Injectable()
export class ProductsService {

  // einzelnen Produkte
  kalender: Product = new Product("Kalender", "DER GEILSTE KALENDER DES JAHRES!!11!!! ... Und dieses Jahr sogar pünktlich!", 9.99, "../../../../assets/img/kalender.JPG"); 
  handy: Product = new Product("Handyhülle", "Boy, da geht mir einer ab!", 6.99, "../../../../assets/img/handy.JPG"); 
  wand: Product = new Product("Wandfoto mit Rahmen", "Perfektes Geschenk für Omas.", 420, "../../../../assets/img/wand.JPG"); 
  polo: Product = new Product("Glückliches Polo", "Schon mal ein glücklicheres Polo gesehen?", 123, "../../../../assets/img/polo.JPG");

  // Produkte im Array
  productsArray: Product[];

  constructor() { 

    this.productsArray = [
      this.kalender,
      this.handy,
      this.wand,
      this.polo
    ];

  }

  products() {
    return this.productsArray;
  }
}
