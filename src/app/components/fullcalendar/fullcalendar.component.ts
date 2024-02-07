import { Component } from '@angular/core'

@Component({
  selector: 'app-fullcalendar',
  standalone: true,
  imports: [],
  templateUrl: './fullcalendar.component.html',
  styleUrl: './fullcalendar.component.scss',
})
export class FullcalendarComponent {
  diasDaSemana: string[] = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ]
}
