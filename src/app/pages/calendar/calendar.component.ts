import { Component } from '@angular/core'
import { FullcalendarComponent } from '../../components/fullcalendar/fullcalendar.component'
import { EventComponent } from '../../components/event/event.component'
import { DiaCalendario, Evento } from '../../shared/types/calendar.type'
import { DragDropModule } from 'primeng/dragdrop'
import { NgIf } from '@angular/common'
import { EditableTextComponent } from '../../widgets/editable-text/editable-text.component'

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    FullcalendarComponent,
    EventComponent,
    DragDropModule,
    NgIf,
    EditableTextComponent,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  dataAtual: Date = new Date()
  mesAtual: number = this.dataAtual.getMonth()
  anoAtual: number = this.dataAtual.getFullYear()
  diasDoMes: DiaCalendario[] = this.retornaDiasDoMes(
    this.anoAtual,
    this.mesAtual,
  )
  eventoArrastado: Evento | undefined | null = {
    nome: '',
  }
  shiftDay = new Date(this.anoAtual, this.mesAtual, 1).getDay() - 1

  getEventInfo($event: any) {
    this.diasDoMes[$event?.day + this.shiftDay].eventos.push({
      nome: $event.value,
    })
  }

  retornaDiasDoMes(anoAtual: number, mesAtual: number): DiaCalendario[] {
    const diasDoMes: DiaCalendario[] = []
    const diaInicioMes: number = new Date(anoAtual, mesAtual, 1).getDay()
    const dias: number =
      new Date(anoAtual, mesAtual + 1, 0).getDate() + diaInicioMes
    for (let i = 0; i < dias; i++) {
      if (i < diaInicioMes)
        diasDoMes.push({
          eventos: [],
          numSemana: 0,
        })
      else {
        diasDoMes.push({
          numSemana: i - diaInicioMes + 1,
          eventos: [],
        })
      }
    }
    return diasDoMes
  }

  iniciarArrastar(evento: Evento) {
    this.eventoArrastado = evento
  }

  soltaDia(dia: DiaCalendario, ev: any) {
    if (ev.toElement.classList.contains('nao-arrasta')) {
      this.eventoArrastado = null
      return
    }
    if (this.eventoArrastado) {
      const indexIda = this.diasDoMes.indexOf(dia)
      dia.eventos.push(this.eventoArrastado)
      this.diasDoMes[indexIda] = dia
    }
  }

  aoSoltarDia(dia: DiaCalendario, evento: Evento, ev: DragEvent) {
    if (ev.dataTransfer?.dropEffect === 'none' || this.eventoArrastado === null)
      return
    const indexVinda = this.diasDoMes.indexOf(dia)
    const indexEvento = this.diasDoMes[indexVinda].eventos.indexOf(evento)
    this.diasDoMes[indexVinda].eventos.splice(indexEvento, 1)
    this.eventoArrastado = null
  }
}
