import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AutoFocusModule } from 'primeng/autofocus'
import { InputTextModule } from 'primeng/inputtext'

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [InputTextModule, FormsModule, AutoFocusModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent {
  @Output() sendValue = new EventEmitter<string>()
  value: string = ''
  sendInput() {
    this.sendValue.emit(this.value)
  }
}
