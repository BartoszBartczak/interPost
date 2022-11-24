import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './views/form/form.component';

import { MainComponent } from './views/main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'form', component: FormComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
