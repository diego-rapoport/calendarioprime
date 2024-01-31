import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: 'cal',
    loadComponent: () =>
      import('./components/fullcalendar/fullcalendar.component').then(
        (m) => m.FullcalendarComponent,
      ),
  },
]
