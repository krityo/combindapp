import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { PatientdetailPage } from '../patientdetail/patientdetail';

/**
 * Generated class for the TabPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-patient',
  templateUrl: 'tab-patient.html',
})
export class TabPatientPage {

  responseData:any;
  responseNotfound:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public webService: WebapiServiceProvider) {
  }

  ionViewDidLoad() {
    this.webService.getData("feed_patient.php").then((result) => {
      console.log(result);
      this.responseData = result;
    }, (error) => {
      this.responseNotfound = "มีบางอย่างผิดพลาดในการดึงข้อมูลจาก Server";
      console.log(error);
    });
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.webService.getData("feed_patient.php").then((result) => {
        console.log(result);
        this.responseData = result;
      }, (error) => {
        this.responseNotfound = "มีบางอย่างผิดพลาดในการดึงข้อมูลจาก Server";
        console.log(error);
      });
      refresher.complete();
    }, 2000);
  }

  //เขียน ฟังก์ชั่นรับ event click
  patientDetail(cid){
    this.navCtrl.push(PatientdetailPage,{cid:cid});

  }

}
