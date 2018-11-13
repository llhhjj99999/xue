// 在当前的服务中 封装一个方法，负责发起网络请求；一旦发起请求，立刻显示一个loading；请求完毕 将loading关掉
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {LoadingController,ToastController} from 'ionic-angular'

@Injectable()
export class MyHttpService{

  constructor(
    private toastCtrl:ToastController,
    private myHttp:HttpClient,private loadingCtrl:LoadingController){}

  showToast(msg){
    this.toastCtrl.create({
      message:msg,
      duration:1500
    }).present()
  }

  /**
   * @param url :要访问的api
   * @param func ：api访问成功之后执行的回调函数，此方法有参数的
   */
  sendRequest(url,func){
    //显示一个loading
    var myLoading = this.loadingCtrl.create({
      content:'正在加载...'
    })
    myLoading.present()
    //发请求
    this.myHttp.get(url,{withCredentials:true}).subscribe((result)=>{
        //请求完之后，关闭loading   
        myLoading.dismiss()
        //执行第二个参数所指定的方法
        func(result)
    })

    
  }

}