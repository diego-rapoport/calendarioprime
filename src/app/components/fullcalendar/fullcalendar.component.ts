import { NgIf } from '@angular/common'
import { Component } from '@angular/core'
import { DragDropModule } from 'primeng/dragdrop'

type Evento = {
  nome: string
}

type DiaCalendario = {
  numSemana: number
  eventos: Evento[]
}

@Component({
  selector: 'app-fullcalendar',
  standalone: true,
  imports: [DragDropModule, NgIf],
  templateUrl: './fullcalendar.component.html',
  styleUrl: './fullcalendar.component.scss',
})
export class FullcalendarComponent {
  dataAtual: Date = new Date(2024, 1)
  mesAtual: number = this.dataAtual.getMonth()
  anoAtual: number = this.dataAtual.getFullYear()
  diasDoMes: DiaCalendario[] = this.retornaDiasDoMes(
    this.anoAtual,
    this.mesAtual,
  )
  diasDaSemana: string[] = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ]
  eventoArrastado: Evento | undefined | null = {
    nome: '',
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
          eventos: [
            {
              nome: `Teste ${i}`,
            },
          ],
        })
      }
    }
    return diasDoMes
  }

  iniciarArrastar(evento: Evento) {
    this.eventoArrastado = evento
  }

  soltaDia(dia: DiaCalendario) {
    if (this.eventoArrastado) {
      const indexIda = this.diasDoMes.indexOf(dia)
      dia.eventos.push(this.eventoArrastado)
      this.diasDoMes[indexIda] = dia
    }
    this.eventoArrastado = null
  }

  aoSoltarDia(dia: DiaCalendario, evento: Evento, ev: DragEvent) {
    if (ev.dataTransfer?.dropEffect === 'none') return
    const indexVinda = this.diasDoMes.indexOf(dia)
    const indexEvento = this.diasDoMes[indexVinda].eventos.indexOf(evento)
    this.diasDoMes[indexVinda].eventos.splice(indexEvento, 1)
    this.eventoArrastado = null
  }
}
