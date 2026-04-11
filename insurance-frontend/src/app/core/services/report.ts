import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CitizenPlan } from '../model/CitizenPlan';
import { SearchRequest } from '../model/SearchRequest';

@Injectable({
  providedIn: 'root'
})
export class Report {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/reports'; 

  searchPlans(request: SearchRequest): Observable<CitizenPlan[]> {
    return this.http.post<CitizenPlan[]>(`${this.apiUrl}/search`, request);
  }

  savePlan(plan: CitizenPlan): Observable<string> {
    return this.http.post(`${this.apiUrl}/save`, plan, { responseType: 'text' });
  }

  exportExcel() {
    return window.open(`${this.apiUrl}/excel`, '_blank');
  }

  exportPdf() {
    return window.open(`${this.apiUrl}/pdf`, '_blank');
  }

  getAuditLogs(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/logs'); 
  }

  getAnalyticsData(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/analytics');
  }
}