import { Component } from '@angular/core';
import { LoadingController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailPage} from '../detail/detail'

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  list=[]
  constructor(
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  /**
   * @param pid 当前商品的pid
   */
  jump(){
    this.navCtrl.push(DetailPage)
  }
  handleRefresh(myRefresher){
    
    setTimeout(()=>{
      myRefresher.complete()
    },2000)
  }
}
