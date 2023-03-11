import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderComponent} from './comonents/header/header.component';
import {GratisComponent} from './comonents/banner/gratis/gratis.component';
import {HomeComponent} from './comonents/home/home.component';
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainTabComponent} from './comonents/tabs/main-tab/main-tab.component';
import {AppMaterialModule} from "./app.material.module";
import {TabBannerComponent} from "./comonents/banner/tab-banner/tab-banner.component";
import {ProductionComponent} from "./comonents/tabs/plastic-windows/production/production.component";
import {PlasticPageComponent} from "./comonents/tabs/plastic-windows/plastic-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GratisComponent,
    HomeComponent,
    MainTabComponent,
    TabBannerComponent,
    ProductionComponent,
    PlasticPageComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
