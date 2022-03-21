import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder ,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {
  [x: string]: any;
  public test: any = [];
  selectedParam: any;
  data(data: string) {
    this.selectedParam.emit(data);
    console.log("data");
  }
  // emp_form: FormGroup; 
  emp_form = new FormGroup({
    empid: new FormControl(),
    name: new FormControl(),
    xyz: new FormControl(),
    salary: new FormControl(),
    email: new FormControl(),
    ph_no: new FormControl(),
    abc: new FormControl(),
    qualification: new FormControl(),
  })

  delete(i: any)
  {
    this.test.splice(i,1);
    console.log("row delete",this.test);
  }
  editIndex = null;

  


  constructor( formblider:FormBuilder,private http: HttpClient) {
    this.isedit=false;
    this.emp_form= formblider.group({
      empid:'',
      name:['', Validators.required],
      xyz:'',
      salary:['', Validators.required],
      email:['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      ph_no:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      abc:['', Validators.required],
      pra:['', Validators.required],
      qualification:'',
    
         })
   }
   clickEdit(item:any){
    console.log("====",item)
    this.isedit=true;
    this.emp_form.controls.empid.setValue(item.empid);
    this.emp_form.controls.name.setValue(item.name);
    this.emp_form.controls.xyz.setValue(item.xyz);
    this.emp_form.controls.salary.setValue(item.salary);
    this.emp_form.controls.email.setValue(item.email);
    this.emp_form.controls.ph_no.setValue(item.ph_no);
    this.emp_form.controls.abc.setValue(item.abc);
    this.emp_form.controls.pra.setValue(item.pra);
    this.emp_form.controls.qualification.setValue(item.qualification);

  }
   updateall(){
     
   }
getallemployee(){
  this.http.get<any>('http://localhost:3000/getEmployee',).subscribe(data => { 
    console.log(data)
    this.test=data.result
    })
}
 
   ngOnInit(): void {
  this.getallemployee();
     
  
  }
  get f(){
    return this.emp_form.controls;
  }
  emp (){
    this.submitted = true;

   
    // if (this.emp_form.invalid) {
    //     return;
    // }
   
    if(this.isedit){
      this.http.post<any>('http://localhost:3000/updateEmployee',this.emp_form.value).subscribe(data => {
        console.log(data)
    })
    }else{
      this.http.post<any>('http://localhost:3000/createEmployee',this.emp_form.value).subscribe(data => {
        console.log(data)
    })
    }

 this.isedit=false;
  this.emp_form.reset();
  this.getallemployee();
 console.log("=======", this.emp_form.value)
}
}
