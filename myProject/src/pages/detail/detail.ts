import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotFoundPage} from '../not-found/not-found'
import {CartPage} from '../cart/cart'
//import {LoginPage} from '../login/login'


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  cart = CartPage;
  notFound = NotFoundPage;
  days=15;
  hours = 15;
  minutes=15;
  second=15;
  myTimer = null;
  constructor(
    //private toastCtrl:ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  addToCart(){

  }
  jump(){
    this.navCtrl.push(NotFoundPage)
  }
}
