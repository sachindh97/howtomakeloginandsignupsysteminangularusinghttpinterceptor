import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from './users/apiservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  showmenu=false;

  constructor(private service:ApiserviceService,private router:Router){}
  token = this.service.getToken();
  name =   localStorage.getItem('username');
   
  ngOnInit(): void {
  
    if(this.token)
    {
        this.showmenu = true;
    }else
    {
      this.showmenu = false;
    }
   }
   
   logout()
   {
     console.log('logout##');
     
     localStorage.clear();
     this.router.navigate(['login']).then(()=>{
       window.location.reload();
     });

   }



}
