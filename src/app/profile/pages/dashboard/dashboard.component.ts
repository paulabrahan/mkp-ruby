import { Component ,OnInit} from '@angular/core';
import { menuModel } from '../../interface/menuModel.class';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
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
  font-weight: 600;
  font-size:20px;
 }
  img{
    margin:4%;
    max-width: 9%;
    margin-top:0;
    
  }
  .logo{
    margin-left:70%;
  }

.caja{
  margin-left:5px;
}
.btn{
margin:-7px;

}
.butt{
border-radius:5px;
display:flex;
margin-top:50px;
height:40px;


}
p{
   margin-top:30px;
  font-size:50px;
 margin-left:20px;
 color:rgba(0, 0, 0, 0.5);
 font-family:Andika;
}


    `

  ]
})
export class DashboardComponent implements OnInit  {


   reporte:menuModel[]=[
   {
     titulo:'1d',
     url:'',
     icon:'',
     css:'',
     
  }]
  // {
  //   texto:'3D',
  // },
  // {
  //   texto:'7D',
  // },
  // {
  //   texto:'1M',
  // },
  // {
  //   texto:'3M',
  // },
  // {
  //   texto:'6M',
  // },
  // {
  //   texto:'1A',
  // }

  // ]
  constructor() {

    console.log('daswor')
   }
   ngOnInit(): void {
  }

  
}
