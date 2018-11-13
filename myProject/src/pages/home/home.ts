import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IndexPage} from '../index/index'
import {CartPage} from '../cart/cart'
import {UserCenterPage} from '../user-center/user-center'
import {StudyPage} from '../study/study'


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  tabIndex = IndexPage
  tabCart = CartPage
  tabPerson = UserCenterPage
  tabStudy = StudyPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
