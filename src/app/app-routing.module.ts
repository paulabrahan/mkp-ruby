import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './shared/principal/principal.component';




const routes: Routes = [


  {
    path: 'auth',
    loadChildren: () => import('./authh/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '404',
    component: PrincipalComponent
  },

  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule,

  ]
})
export class AppRoutingModule { }
