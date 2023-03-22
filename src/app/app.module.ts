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
import {PlasticPageComponent} from "./comonents/tabs/plastic-windows/production/plastic-page.component";
import {WindowsComponent} from "./comonents/tabs/plastic-windows/windows/windows.component";
import {ModalComponent} from "./comonents/tabs/plastic-windows/windows/modal/modal.component";
import {DoorsComponent} from "./comonents/tabs/doors/doors/doors.component";
import {GratisModalComponent} from "./comonents/banner/gratis/gratis-modal/gratis-modal.component";
import {SecurityDoorsComponent} from "./comonents/tabs/doors/security-doors/security-doors.component";
import {BlindMainComponent} from "./comonents/tabs/blinds/blind-main/blind-main.component";
import {RouterModule, Routes} from "@angular/router";
import {NgbCarouselModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";
import {BlindModalComponent} from "./comonents/tabs/blinds/blind-main/blind-modal/blind-modal.component";
import {ShadesComponent} from "./comonents/tabs/shades/shades.component";
import {NetsComponent} from "./comonents/tabs/nets/nets.component";
import {VentilationComponent} from "./comonents/tabs/ventilation/ventilation.component";

const routes: Routes = [
  {path: '', component: MainTabComponent, pathMatch: 'full'},
  {path: 'muanyag-ablak', component: WindowsComponent},
  {path: 'muanyag-ablak-production', component: PlasticPageComponent},
  {path: 'muanyag-ajtok', component: DoorsComponent},
  {path: 'biztonsagi-ajtok', component: SecurityDoorsComponent},
  {path: 'redonyok', component: BlindMainComponent},
  {path: 'belso-arnyekolok', component: ShadesComponent},
  {path: 'szunyoghalok', component: NetsComponent},
  {path: 'szellozes', component: VentilationComponent},

  {path: '**', component: MainTabComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GratisComponent,
    HomeComponent,
    MainTabComponent,
    TabBannerComponent,
    PlasticPageComponent,
    WindowsComponent,
    ModalComponent,
    DoorsComponent,
    GratisModalComponent,
    SecurityDoorsComponent,
    BlindMainComponent,
    BlindModalComponent,
    ShadesComponent,
    NetsComponent,
    VentilationComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    RouterModule.forRoot(routes, {useHash: true}),
    NgbModule,
    NgbCarouselModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
