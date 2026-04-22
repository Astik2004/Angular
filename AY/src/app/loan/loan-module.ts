import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing-module';
import { CreateLoan } from './create-loan/create-loan';
import { ViewLoan } from './view-loan/view-loan';
import { EditLoan } from './edit-loan/edit-loan';


@NgModule({
  declarations: [ 
    CreateLoan,
    ViewLoan,
    EditLoan
  ],
  imports: [
    CommonModule,
    LoanRoutingModule
  ]
})
export class LoanModule { }
