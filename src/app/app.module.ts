import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { MainPage,
         ModalPage,
         Page2Page,
         Page3Page,
         SettingsPage,
         Settings2Page,
         TabsPage
} from '../pages/index.pages'

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    ModalPage,
    Page2Page,
    Page3Page,
    SettingsPage,
    Settings2Page,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp , {
      backButtonText: 'Go Back',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    ModalPage,
    Page2Page,
    Page3Page,
    SettingsPage,
    Settings2Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
