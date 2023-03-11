import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
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
    margin-left:80%;
  }
    `
  ]
})
export class ProductsComponent {

}
