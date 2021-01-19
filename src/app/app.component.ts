import { Component, OnInit, VERSION } from '@angular/core';
import{SharedService} from './shared.service';

import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
// import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data:Array<any>

  constructor(private JSONPlaceholder : SharedService){
    this.data = new Array<any>()
    }

    getFromAPI() {
      this.JSONPlaceholder.getData().subscribe((data)=>{
        console.log(data);
        this.data = data;
      })
  }
  // url = 'https://jsonplaceholder.typicode.com/users';
  // constructor(private http : HttpClient){
    
    
  //   this.http.get(this.url).toPromise().then(data =>{
  //     console.log(data);

  //   })
  // }


  name:any;
  search(){
    this.data =this.data.filter(data =>{
      return data.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    })
  }
ngOnInit() {
 
  }
}