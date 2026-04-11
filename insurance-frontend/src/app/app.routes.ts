import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { ManagePlans } from './features/manage-plans/manage-plans';
import { Analytics } from './features/analytics/analytics';
import { AuditLogs} from './features/audit-logs/audit-logs';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'manage-plans', component: ManagePlans },
  { path: 'analytics', component: Analytics},
  { path: 'audit-logs', component: AuditLogs },
  { path: '**', redirectTo: 'dashboard' }
];