import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogOutComponent } from './pages/log-out/log-out.component';
import { ProductsComponent } from './pages/products/products.component';
import { SalesComponent } from './pages/sales/sales.component';
import { SetupComponent } from './pages/setup/setup.component';
import { UsersComponent } from './pages/users/users.component';


import { MaterialesModule } from "../materiales/materiales.module";
import { HomeComponent } from './pages/home/home.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfilesComponent } from './pages/perfiles/perfiles.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    DashboardComponent,
    LogOutComponent,
    ProductsComponent,
    SalesComponent,
    SetupComponent,
    UsersComponent,
    HomeComponent,
    PerfilesComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialesModule,
    ProfileRoutingModule,
    NgChartsModule

  ]
})
export class ProfileModule { }
