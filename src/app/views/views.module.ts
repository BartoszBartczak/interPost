import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    MainComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ViewsModule { }
