import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcenterComponent } from './addcenter/addcenter.component';
import { CenterDetailsComponent } from './center-details/center-details.component';
import { HomeComponent } from './home/home.component';
import { ViewcenterComponent } from './viewcenter/viewcenter.component';

const routes: Routes = [
  {path:"getcenters",component:ViewcenterComponent},
  {path:"getcenters/addcenter",component:AddcenterComponent},
  {path:'center/:id',component:CenterDetailsComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
