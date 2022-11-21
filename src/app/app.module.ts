import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home_page/home-page.component';
import { LoginComponent } from './login/login.component';
import {ChartModule} from 'primeng/chart';
import { TotalComponent } from './total/total.component';
import { ChartDateComponent } from './chart-date/chart-date.component';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ChartFromtoComponent } from './chart-fromto/chart-fromto.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    TotalComponent,
    ChartDateComponent,
    ChartFromtoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    CalendarModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
