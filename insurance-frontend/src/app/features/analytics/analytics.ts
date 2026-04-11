import { Component, OnInit, inject,ChangeDetectorRef } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Report } from '../../core/services/report'; // Service import ki

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './analytics.html'
})
export class Analytics implements OnInit {
  private reportService = inject(Report);
  private cdr = inject(ChangeDetectorRef);
  // 1. PIE CHART CONFIGURATION
  public pieChartType: ChartType = 'pie';
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: { legend: { position: 'bottom' } }
  };
  // Shuru me empty values
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Approved', 'Denied', 'Terminated'],
    datasets: [{ data: [0, 0, 0], backgroundColor: ['#198754', '#dc3545', '#ffc107'] }]
  };

  // 2. BAR CHART CONFIGURATION
  public barChartType: ChartType = 'bar';
  public barChartOptions: ChartConfiguration['options'] = { responsive: true };
  // Shuru me empty values
  public barChartData: ChartData<'bar'> = {
    labels: ['Cash', 'Food', 'Medical', 'Employment'],
    datasets: [{ data: [0, 0, 0, 0], label: 'Enrolled Citizens', backgroundColor: '#0d6efd' }]
  };

  isLoading: boolean = true;

  ngOnInit() {
    this.fetchAnalytics();
  }

  fetchAnalytics() {
    this.reportService.getAnalyticsData().subscribe({
      next: (data) => {
        this.isLoading = false;
        this.cdr.markForCheck();  
        // Backend se aaye data ko chart arrays me map karna
        // Pie Chart (Approved, Denied, Terminated)
        this.pieChartData = {
          labels: ['Approved', 'Denied', 'Terminated'],
          datasets: [{ 
            data: [data.approved, data.denied, data.terminated], 
            backgroundColor: ['#198754', '#dc3545', '#ffc107'] 
          }]
        };

        // Bar Chart (Cash, Food, Medical, Employment)
        this.barChartData = {
          labels: ['Cash', 'Food', 'Medical', 'Employment'],
          datasets: [{ 
            data: [data.cash, data.food, data.medical, data.employment], 
            label: 'Enrolled Citizens', 
            backgroundColor: '#0d6efd' 
          }]
        };
      },
      error: (err) => {
        console.error('Failed to fetch analytics:', err);
        this.isLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
}