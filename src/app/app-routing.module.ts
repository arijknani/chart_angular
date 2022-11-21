import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartDateComponent } from './chart-date/chart-date.component';
import { HomePageComponent } from './home_page/home-page.component';
import { LoginComponent } from './login/login.component';
import { TotalComponent } from './total/total.component';
import { ChartFromtoComponent } from './chart-fromto/chart-fromto.component';

const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'homepage',component:HomePageComponent},
  {path:'total',component:TotalComponent},
  {path:'chartdate',component:ChartDateComponent},
  {path:'chartfromto',component:ChartFromtoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
