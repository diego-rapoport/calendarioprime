import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CalendarComponent } from './calendar.component'
import { By } from '@angular/platform-browser'

const januaryObj = [
  {
    eventos: [],
    numSemana: 0,
  },
  {
    eventos: [],
    numSemana: 0,
  },
  {
    eventos: [],
    numSemana: 0,
  },
  {
    eventos: [],
    numSemana: 0,
  },
  {
    numSemana: 1,
    eventos: [
      {
        nome: 'Teste 4',
      },
    ],
  },
  {
    numSemana: 2,
    eventos: [
      {
        nome: 'Teste 5',
      },
    ],
  },
  {
    numSemana: 3,
    eventos: [
      {
        nome: 'Teste 6',
      },
    ],
  },
  {
    numSemana: 4,
    eventos: [
      {
        nome: 'Teste 7',
      },
    ],
  },
  {
    numSemana: 5,
    eventos: [
      {
        nome: 'Teste 8',
      },
    ],
  },
  {
    numSemana: 6,
    eventos: [
      {
        nome: 'Teste 9',
      },
    ],
  },
  {
    numSemana: 7,
    eventos: [
      {
        nome: 'Teste 10',
      },
    ],
  },
  {
    numSemana: 8,
    eventos: [
      {
        nome: 'Teste 11',
      },
    ],
  },
  {
    numSemana: 9,
    eventos: [
      {
        nome: 'Teste 12',
      },
    ],
  },
  {
    numSemana: 10,
    eventos: [
      {
        nome: 'Teste 13',
      },
    ],
  },
  {
    numSemana: 11,
    eventos: [
      {
        nome: 'Teste 14',
      },
    ],
  },
  {
    numSemana: 12,
    eventos: [
      {
        nome: 'Teste 15',
      },
    ],
  },
  {
    numSemana: 13,
    eventos: [
      {
        nome: 'Teste 16',
      },
    ],
  },
  {
    numSemana: 14,
    eventos: [
      {
        nome: 'Teste 17',
      },
    ],
  },
  {
    numSemana: 15,
    eventos: [
      {
        nome: 'Teste 18',
      },
    ],
  },
  {
    numSemana: 16,
    eventos: [
      {
        nome: 'Teste 19',
      },
    ],
  },
  {
    numSemana: 17,
    eventos: [
      {
        nome: 'Teste 20',
      },
    ],
  },
  {
    numSemana: 18,
    eventos: [
      {
        nome: 'Teste 21',
      },
    ],
  },
  {
    numSemana: 19,
    eventos: [
      {
        nome: 'Teste 22',
      },
    ],
  },
  {
    numSemana: 20,
    eventos: [
      {
        nome: 'Teste 23',
      },
    ],
  },
  {
    numSemana: 21,
    eventos: [
      {
        nome: 'Teste 24',
      },
    ],
  },
  {
    numSemana: 22,
    eventos: [
      {
        nome: 'Teste 25',
      },
    ],
  },
  {
    numSemana: 23,
    eventos: [
      {
        nome: 'Teste 26',
      },
    ],
  },
  {
    numSemana: 24,
    eventos: [
      {
        nome: 'Teste 27',
      },
    ],
  },
  {
    numSemana: 25,
    eventos: [
      {
        nome: 'Teste 28',
      },
    ],
  },
  {
    numSemana: 26,
    eventos: [
      {
        nome: 'Teste 29',
      },
    ],
  },
  {
    numSemana: 27,
    eventos: [
      {
        nome: 'Teste 30',
      },
    ],
  },
  {
    numSemana: 28,
    eventos: [
      {
        nome: 'Teste 31',
      },
    ],
  },
  {
    numSemana: 29,
    eventos: [
      {
        nome: 'Teste 32',
      },
    ],
  },
]

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

  it('should return the correct days of the month of january 2024', () => {
    expect(component.retornaDiasDoMes(2024, 1) === januaryObj)
  })

  it('should set eventoArrastado of component', () => {
    const event = { nome: 'Test' }
    component.iniciarArrastar(event)
    expect(component.eventoArrastado === event)
  })
})
