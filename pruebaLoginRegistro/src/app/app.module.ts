import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"pruebaloginregistro-bc7e4","appId":"1:523353941459:web:5ebaae24d12f6682afbb26","storageBucket":"pruebaloginregistro-bc7e4.appspot.com","apiKey":"AIzaSyAAvpibfFDnD-7sVOQIwjEFjujWp2rI81k","authDomain":"pruebaloginregistro-bc7e4.firebaseapp.com","messagingSenderId":"523353941459"})), provideAuth(() => getAuth())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
