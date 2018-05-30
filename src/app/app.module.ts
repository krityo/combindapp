import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import{IonicStorageModule} from '@ionic/storage';

import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//sidemenu
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SideSettingPage } from '../pages/side-setting/side-setting';

//import http module
import{HttpModule}from '@angular/http';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';

//tab menu
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabsPage } from '../pages/tabs/tabs';
import { CoursedetailPage } from '../pages/coursedetail/coursedetail';
import { RegisterPage } from '../pages/register/register';
import { PatientPage } from '../pages/patient/patient';
import { PatientdetailPage } from '../pages/patientdetail/patientdetail';


@NgModule({
  declarations: [
    MyApp,
    SideSchedulePage,
    SidePortfolioPage,
    SidePaymentPage,
    SideSettingPage,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabArticlePage,
    TabContactPage,
    TabsPage,
    CoursedetailPage,
RegisterPage,
PatientPage,
PatientdetailPage
 
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SideSchedulePage,
    SidePortfolioPage,
    SidePaymentPage,
    SideSettingPage,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabArticlePage,
    TabContactPage,
    TabsPage,
    CoursedetailPage,
    RegisterPage,
    PatientPage,
    PatientdetailPage
 
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebapiServiceProvider
  ]
})
export class AppModule {}
