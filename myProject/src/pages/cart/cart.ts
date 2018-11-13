import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OrderConfirmPage} from '../order-confirm/order-confirm'
import {DetailPage} from '../detail/detail'



@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter CartPage')
  }
  
  jump(){
    this.navCtrl.push(OrderConfirmPage)    
  }
  jumpTo(){
    this.navCtrl.push(DetailPage)
  }
  
}
