import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController  } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import{Storage} from '@ionic/storage';
import { TabCarPage } from '../tab-car/tab-car';


@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {
  email:any;
  public signatureImage : any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,public storage:Storage,public modalController:ModalController) {

      //สร้างตัวแประเก็บลง Storge
      this.storage.set('myemail','kkkk@hotmail.com');
    this.storage.get('myemail').then((result)=>{this.email=result;});
    this.signatureImage = navParams.get('signatureImage');;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }


  

  register()
  {
    this.navCtrl.push(RegisterPage);
  }

  opencar()
  {
    this.navCtrl.push(TabCarPage);
  }
}
