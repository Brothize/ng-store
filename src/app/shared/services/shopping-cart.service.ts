import { Injectable } from '@angular/core';
import { Product } from "../classes/product";
import { BehaviorSubject, Observable, of, from } from 'rxjs';

@Injectable()
export class ShoppingCartService {

  anzahlKalender: number = 0;
  anzahlHandy: number = 0;
  anzahlWand: number = 0;
  anzahlPolo: number = 0;

  shopping: number = 0;
  shoppingObs: BehaviorSubject<number>;

  constructor() { 
    this.shoppingObs = new BehaviorSubject<number>(this.shopping);
  }

  anKalender(): number {
    return this.anzahlKalender;
  }
  anHandy(): number {
    return this.anzahlHandy;
  }
  anWand(): number {
    return this.anzahlWand;
  }
  anPolo(): number {
    return this.anzahlPolo;
  }

  getUp(name: string){
    if(name == "Kalender"){
      this.anzahlKalender++;
    } else if(name == "Handyhülle"){
      this.anzahlHandy++;
    } else if(name == "Wandfoto mit Rahmen"){
      this.anzahlWand++;
    } else {
      this.anzahlPolo++;
    }
  }
  getDown(name: string){
    if(name == "Kalender"){
      if(this.anzahlKalender > 0){
        this.anzahlKalender--;
      }
    } else if(name == "Handyhülle"){
      if(this.anzahlHandy > 0){
        this.anzahlHandy--;
      }
    } else if(name == "Wandfoto mit Rahmen"){
      if(this.anzahlWand > 0){
        this.anzahlWand--;
      }
    } else {
      if(this.anzahlPolo > 0){
        this.anzahlPolo--;
      }
    }
  }

  updateShopping() {
    this.shopping = this.anzahlHandy + this.anzahlKalender + this.anzahlPolo + this.anzahlWand;
    this.shoppingObs.next(this.shopping);
  }
}
