import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WeatherComponent} from './weather/weather.component';
const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'weather', component: WeatherComponent},
  {path : '', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
