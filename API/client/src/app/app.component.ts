import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The dating app';
  users:any;

  constructor(private htttp:HttpClient){}
  ngOnInit(){
    this.getUser();
  }
  getUser(){
    this.htttp.get('https:localhost:5001/api/users').subscribe(response=>{
      this.users=response;
    },error=>{
      console.log(error);
    })
  }

}
