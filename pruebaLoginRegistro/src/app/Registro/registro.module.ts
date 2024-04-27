import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {RegistroPage } from './registro.page';
import {SharedModule} from '../shared.module';

import { RegistroPageRoutingModule } from './registro-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    SharedModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
