import { Component, OnInit, inject,ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { Report } from '../../core/services/report';
import { CitizenPlan } from '../../core/model/CitizenPlan';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  private fb = inject(FormBuilder);
  private reportService = inject(Report);

  private cdr = inject(ChangeDetectorRef);

  searchForm: FormGroup;
  filteredRecords: CitizenPlan[] = []; 
  isLoading: boolean = false;

  constructor() {
    this.searchForm = this.fb.group({
      planName: [''],
      status: [''], 
      gender: ['']
    });
  }

  ngOnInit() {
    this.onSearch();
  }

  onSearch() {
    this.isLoading = true;
    const requestPayload = {
      planName: this.searchForm.value.planName,
      planStatus: this.searchForm.value.status, 
      gender: this.searchForm.value.gender
    };

    this.reportService.searchPlans(requestPayload).subscribe({
      next: (data) => {
        this.filteredRecords = data; 
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Search API Error:', err);
        this.isLoading = false;
        this.cdr.markForCheck();
      }
    });
  }

  viewData(type: string) {
    if (type === 'Excel') {
      this.reportService.exportExcel();
    } else if (type === 'PDF') {
      this.reportService.exportPdf();
    }
  }
}