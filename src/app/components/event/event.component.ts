import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { InputTextModule } from 'primeng/inputtext'

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [DialogModule, InputTextModule, ButtonModule, FormsModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
})
export class EventComponent {
  visible = false
  value = ''

  @Input({ required: true }) day: null | number = null
  @Output() eventInfo = new EventEmitter<{ value: string; day: number }>()

  saveNewEvent() {
    this.eventInfo.emit({ value: this.value, day: this.day ?? 0 })
  }
}
