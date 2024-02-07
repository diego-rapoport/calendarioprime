import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CalendarComponent } from './calendar.component'
import { DiaCalendario, Evento } from '../../shared/types/calendar.type'

describe('CalendarComponent', () => {
  let component: CalendarComponent
  let fixture: ComponentFixture<CalendarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CalendarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should initialize with current month and year', () => {
    const currentMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear()

    expect(component.mesAtual).toEqual(currentMonth)
    expect(component.anoAtual).toEqual(currentYear)
  })

  it('should initialize days of the month', () => {
    const daysOfMonth: DiaCalendario[] = component.retornaDiasDoMes(
      component.anoAtual,
      component.mesAtual,
    )

    expect(component.diasDoMes).toEqual(daysOfMonth)
  })

  it('should handle drag start', () => {
    const testEvento: Evento = { nome: 'Test Evento' }
    component.iniciarArrastar(testEvento)

    expect(component.eventoArrastado).toEqual(testEvento)
  })

  // it('should drop event onto day', () => {
  // const testDia: DiaCalendario = { numSemana: 1, eventos: [] }
  // const testEvento: Evento = { nome: 'Test Evento' }
  // component.eventoArrastado = testEvento
  //
  // const t = {
  // ev: {
  // toElement: {
  // classList: { contains: () => true },
  // },
  // },
  // }
  // component.soltaDia(testDia, t.ev)
  //
  // expect(testDia.eventos).toContain(testEvento)
  // expect(component.eventoArrastado).toBeNull()
  // })

  it('should not drop event onto non-draggable element', () => {
    const testDia: DiaCalendario = { numSemana: 1, eventos: [] }
    const nonDraggableElement = document.createElement('div')
    nonDraggableElement.classList.add('nao-arrasta')

    component.eventoArrastado = { nome: 'Test Evento' }

    component.soltaDia(testDia, { toElement: nonDraggableElement })

    expect(testDia.eventos.length).toBe(0)
    expect(component.eventoArrastado).toBeNull()
  })

  // it('should handle dropping event on the same day', () => {
  // const testDia: DiaCalendario = { numSemana: 1, eventos: [] }
  // const testEvento: Evento = { nome: 'Test Evento' }
  // component.eventoArrastado = testEvento
  //
  // component.soltaDia(testDia, {})
  //
  // expect(testDia.eventos).toContain(testEvento)
  //
  // const secondTestEvento: Evento = { nome: 'Second Test Evento' }
  // component.eventoArrastado = secondTestEvento
  //
  // component.soltaDia(testDia, {})
  //
  // expect(testDia.eventos).toContain(secondTestEvento)
  // expect(testDia.eventos).toContain(testEvento)
  // expect(component.eventoArrastado).toBeNull()
  // })
  it("should not remove evento from dia's eventos on aoSoltarDia if conditions are not met", () => {
    const testDia: DiaCalendario = {
      numSemana: 1,
      eventos: [{ nome: 'Test Event' }],
    }
    const testEvento: Evento = testDia.eventos[0]
    const dragEvent: any = { dataTransfer: { dropEffect: 'none' } }

    component.aoSoltarDia(testDia, testEvento, dragEvent)

    expect(testDia.eventos).toEqual([testEvento])
  })

  it("should not add eventoArrastado to dia's eventos on soltaDia if conditions are not met", () => {
    const testDia: DiaCalendario = { numSemana: 1, eventos: [] }
    const testEvento: Evento = { nome: 'Test Event' }

    component.eventoArrastado = testEvento
    component.soltaDia(testDia, {
      toElement: { classList: { contains: () => true } },
    })

    expect(testDia.eventos).toEqual([])
  })
})
