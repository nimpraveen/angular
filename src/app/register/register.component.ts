import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  public test: any = [];
  selectedParam: any;
  data(data: string) {
    this.selectedParam.emit(data);
    console.log("data");
  }
  delete(i: any)
  {
    this.test.splice(i,1);
    console.log("row delete",this.test);
  }
  

  constructor() { }

  ngOnInit(): void {
    // this.http.get<any>('http://localhost:3000/getEmployee',).subscribe(data => { 
    // console.log(data)
    // this.test=data.result
    // })
  }
}
