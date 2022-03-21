import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder ,Validators} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  emp_form = new FormGroup({
    empid: new FormControl(),
    name: new FormControl(),
    salary:new FormControl(),
    email: new FormControl(),
    ph_no: new FormControl(),
    qualification: new FormControl()
  })
  

  constructor(private formblider:FormBuilder,) { 
    this.emp_form= this.formblider.group({
      empid:'',
      name:'',
      phone:'',//[ [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      salary:'',
      ph_no:'',
      qualification:'',
    
         })
   }
  

  //  ngOnInit(): void {
  //     }
  //   emp ()
  //   // {this.http.post<any>('http://localhost:3000/createEmployee',this.emp_form.value).subscribe(data => {
  // //     console.log(data)
  // // })
  //     console.log("=======", this.emp_form.value)
  //   }
    
  //   }
  
  ngOnInit(): void {
  }
emp (){
  console.log("=======", this.emp_form.value)
}

}
