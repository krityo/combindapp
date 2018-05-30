import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

/**
 * Generated class for the PatientdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patientdetail',
  templateUrl: 'patientdetail.html',
})
export class PatientdetailPage {

  getcid:number;//รับค่าตัวแปร cid
baseUrl:string;//เก็บลิงค์สำหรับดึงรายชื่อคอร์ส
cdetail:any;//เก็บข้อมู้ที่ได้จาก JSON

responseNotfound:any;



  constructor(public navCtrl: NavController, public navParams: NavParams,public webService: WebapiServiceProvider) {
    this.getcid=navParams.get('cid');
  }

  ionViewDidLoad() {
    this.webService.getData("feed_patient_detail.php?cid="+this.getcid).then((result) => {
      console.log(result);
      this.cdetail = result;
    }, (error) => {
      this.responseNotfound = "มีบางอย่างผิดพลาดในการดึงข้อมูลจาก Server";
      console.log(error);
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.webService.getData("feed_patient_detail.php?cid="+this.getcid).then((result) => {
        console.log(result);
        this.cdetail = result;
      }, (error) => {
        this.responseNotfound = "มีบางอย่างผิดพลาดในการดึงข้อมูลจาก Server";
        console.log(error);
      });
      refresher.complete();
    }, 2000);
  }
}
