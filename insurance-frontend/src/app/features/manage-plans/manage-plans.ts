import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Report } from '../../core/services/report';

@Component({
  selector: 'app-manage-plans',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './manage-plans.html',
  styleUrl: './manage-plans.css'
})
export class ManagePlans {
  private fb = inject(FormBuilder);
  private reportService = inject(Report);
  planForm: FormGroup;

  constructor() {
    this.planForm = this.fb.group({
      citizenName: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', Validators.required],
      planName: ['', Validators.required],
      planStatus: ['', Validators.required],
      planStartDate: [''],
      planEndDate: ['']
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.planForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit() {
    if (this.planForm.valid) {
      this.reportService.savePlan(this.planForm.value).subscribe({
        next: (response) => {
          alert('Success: ' + response);
          this.resetForm(); 
        },
        error: (error) => {
          alert('Error: ' + error);
        }
      });
    } else {
      this.planForm.markAllAsTouched();
    }
  }

  resetForm() {
    this.planForm.reset();
    this.planForm.patchValue({
      gender: '',
      planName: '',
      planStatus: ''
    });
  }
}