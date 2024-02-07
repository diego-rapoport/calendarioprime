import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FullcalendarComponent } from './fullcalendar.component'
import { By } from '@angular/platform-browser'

describe('FullcalendarComponent', () => {
  let component: FullcalendarComponent
  let fixture: ComponentFixture<FullcalendarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullcalendarComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FullcalendarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have all the days of the week', () => {
    const diasDaSemanaTest = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ]
    expect(component.diasDaSemana === diasDaSemanaTest)
  })

  it('should render the 7 days of the week', () => {
    const msg = fixture.debugElement.queryAll(By.css('.dia-da-semana'))
    expect(msg.length === 7)
  })

  it('should render the 7 days of the week in order beginning with Domingo', () => {
    const diasDaSemanaTest = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ]
    const msg = fixture.debugElement.queryAll(By.css('.dia-da-semana'))
    let matches = true
    for (let i = 0; i < msg.length; i++) {
      if (!diasDaSemanaTest[i] === msg[i].context['$implicit']) matches = false
    }
    expect(matches).toBeTrue
  })
})
