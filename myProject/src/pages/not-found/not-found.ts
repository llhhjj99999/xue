import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-not-found',
  templateUrl: 'not-found.html',
})
export class NotFoundPage {
  count = 5;
  myTimer = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotFoundPage')
    
    this.myTimer = setInterval(()=>{
      this.count--;
      if(this.count < 1){
        //返回上一页
        if(this.navCtrl.canGoBack()){
          this.navCtrl.pop()
        }
        else{
          clearInterval(this.myTimer)
        }
      }
    },1000)
  }

  //当前页面准备离开时 会执行该生命周期的钩子函数
  ionViewWillLeave(){
    clearInterval(this.myTimer)
  }

}
