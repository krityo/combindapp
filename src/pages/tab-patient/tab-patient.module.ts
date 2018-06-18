import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPatientPage } from './tab-patient';

@NgModule({
  declarations: [
    TabPatientPage,
  ],
  imports: [
    IonicPageModule.forChild(TabPatientPage),
  ],
})
export class TabPatientPageModule {}
