import { Component, OnInit, inject,ChangeDetectorRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Report } from '../../core/services/report';

export interface AuditLog {
  logId: number; 
  action: string;
  description: string;
  timestamp: string; 
  username: string;
}

@Component({
  selector: 'app-audit-logs',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './audit-logs.html'
})
export class AuditLogs implements OnInit {
  private reportService = inject(Report);
  private cdr = inject(ChangeDetectorRef);

  logs: AuditLog[] = [];
  isLoading: boolean = true;
  ngOnInit() {
    this.fetchLogs();
  }

  fetchLogs() {
    this.reportService.getAuditLogs().subscribe({
      next: (data) => {
        this.logs = data; 
        console.log('Logs fetched successfully!', data);
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('API Error: ', err);
        this.isLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
}