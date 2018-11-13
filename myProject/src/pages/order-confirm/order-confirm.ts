import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {PayPage} from '../pay/pay'

/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {
 list=[]
  constructor(
    private modalCtrl:ModalController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
  }
  //显示一个自定义的模态窗
  showModal(){
    var myModal=this.modalCtrl.create(PayPage)
    myModal.present()
    myModal.onDidDismiss((result)=>{
      console.log(result)
      if(result){
        this.navCtrl.parent.select(0)
      }
    })
  } 
}
