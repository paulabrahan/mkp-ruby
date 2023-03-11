import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styles: [
    `
    .menu{
     
     background:#FFFFFF;
     margin:0;
     padding:0;
     height:75px;
     width:100vw;
     display:flex;
     align-items:center;
     font-family:Andika;
   
    }
     img{
       margin:4%;
       max-width: 9%;
       margin-top:0;
       
     }
     .logo{
       margin-left:70%;
     }
       `
  ]
})
export class PerfilesComponent {

  lateral = [

    {
      titulo: 'Dashboard',
      icon: './assets/img/dashboard.png',
      url: '/profile/dashboard',
      css: 'item'
    },
    {
      titulo: 'Products',
      icon: './assets/img/products.png',
      url: './products',
      css: 'item'
    },
    {
      titulo: 'Sales',
      icon: './assets/img/sales.png',
      url: './sales',
      css: 'item',
    },
    {

      titulo: 'Users',
      icon: './assets/img/users.png',
      url: './users',
      css: 'item'
    },

    {

      titulo: 'Setup',
      icon: './assets/img/setup.png',
      url: './setup',
      css: 'item'
    },

  ]
//   exit = [
//     {

//       titulo: 'logOut',
//       icon: './assets/img/cerrado.png',
//       url: './logout',
//       css: 'item'
//     }]


 }



