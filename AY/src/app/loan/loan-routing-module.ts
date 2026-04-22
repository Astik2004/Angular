import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLoan } from './create-loan/create-loan';
import { EditLoan } from './edit-loan/edit-loan';
import { ViewLoan } from './view-loan/view-loan';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  {path: 'create', component: CreateLoan},
  {path: 'view', component: ViewLoan},
  {path: 'edit', component: EditLoan}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
