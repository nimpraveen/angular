import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { EmpComponent } from './emp/emp.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpdashboardComponent,
    EmpComponent,
    RegisterComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
