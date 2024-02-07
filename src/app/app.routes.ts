import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'calendario-mes',
    loadComponent: () =>
      import('./pages/calendar/calendar.component').then(
        (m) => m.CalendarComponent,
      ),
  },
]
