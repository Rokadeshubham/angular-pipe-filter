import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeService } from './employee.service';
import { EmployeeFilterPipe } from './employee-filter.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,EmployeeFilterPipe ],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService]
})
export class AppModule { }
