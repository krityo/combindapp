import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabHomePage } from '../tab-home/tab-home';
import { TabCoursePage } from '../tab-course/tab-course';
import { TabContactPage } from '../tab-contact/tab-contact';
import { TabPatientPage } from '../tab-patient/tab-patient';
import { TabCarPage } from '../tab-car/tab-car';



@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root:any=TabHomePage;
  tab2Root:any=TabCoursePage;
  tab3Root:any=TabCarPage;
  tab4Root:any=TabPatientPage;
  tab5Root:any=TabContactPage;

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
