import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
/**
 * Generated class for the PatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
})
export class PatientPage {
  responseData:any;
  responseNotfound:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public webService: WebapiServiceProvider) {
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

}
