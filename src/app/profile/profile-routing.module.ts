import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LogOutComponent } from './pages/log-out/log-out.component';
import { ProductsComponent } from './pages/products/products.component';
import { SalesComponent } from './pages/sales/sales.component';
import { SetupComponent } from './pages/setup/setup.component';
import { UsersComponent } from './pages/users/users.component';
import { PerfilesComponent } from './pages/perfiles/perfiles.component';



const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: HomeComponent },
      { path: 'logOut', component: LogOutComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'setup', component: SetupComponent },
      { path: 'users', component: UsersComponent },
      { path: 'lateral-arrriba', component: PerfilesComponent },
      { path: '**', redirectTo: 'lateral-arriba' }


    ]
  },
];


@NgModule({

  imports: [

    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,

  ]

})
export class ProfileRoutingModule { }
