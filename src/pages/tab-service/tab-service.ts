import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Storage} from '@ionic/storage';

/**
 * Generated class for the TabServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-service',
  templateUrl: 'tab-service.html',
})
export class TabServicePage {

  email:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {

    this.storage.get('myemail').then((result)=>{this.email=result;});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabServicePage');
  }

}
