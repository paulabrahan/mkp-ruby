import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { menuModel, menuDefault, menulateral, menuExit } from '../../interface/menuModel.class';
import { DashboardComponent } from '../dashboard/dashboard.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .body{
      background:#EDE4E4;    
    }
    .body-2{
      padding:2%;
    }
.main{
  margin:0;
  padding:0;
  /* background:#EDE4E4; */
  
}

#menu{          
    width:100%;
    max-width:15%; 
    height:100vh;
    cursor:pointer;
    background: #FFFFFF;
    color:rgba(0, 0, 0, 0.5);
    font-family:Andika;
    
    
}
.usuario{
  width:60%;
  margin-top:5%;
  margin-left:20%;
}
.border-radius {
     width: 100%;
     height: 100%;        
     border-radius: 50%;
     background:  #F0F0F0;
     padding :20%;
    }
    .arriba{
margin-top:34px;
margin-left:10%;
width:80%;
    height:1%;
    }
.user-data{
  margin:0;
}

.user-name{
  
  margin:0;
}
.user-role{
margin:0;
}

#ps{
  text-align:center;
  vertical-align: inherit;
  color: rgba(0, 0, 0, 0.5);
  font-size:10px
}

#icont{
    max-width:65%; 
   
}
.imgs{
  margin-left:20%;
  width:20%;
}
.img-exits{
   
   width:30px;
   margin-top:-5%;
  margin-right:7%;
}


button{
  width:13.50%;
  background: #D3D3D3;
 position:absolute;
  bottom:2%;
 
  
}

.abajo{
  margin-top:45%;
  margin-left:10%;
  width:80%;
  height:1%;
}

 `

  ],
})


export class HomeComponent implements OnInit {
  selectedMenu: menuModel;
  menu: menuModel[];
  exit: menuModel;

  constructor() {

    this.selectedMenu = menuDefault;
    this.menu = menulateral;
    this.exit = menuExit;
  }

  ngOnInit(): void {

  }


  onSelect(data: menuModel): void {
    alert(data.titulo);
    this.selectedMenu = data;
  }


}
