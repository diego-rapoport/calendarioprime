import { Component, EventEmitter, Input, Output } from '@angular/core'
import { EditIconComponent } from '../../components/edit-icon/edit-icon.component'
import { InputTextComponent } from '../../components/input-text/input-text.component'

@Component({
  selector: 'app-editable-text',
  standalone: true,
  imports: [EditIconComponent, InputTextComponent],
  templateUrl: './editable-text.component.html',
  styleUrl: './editable-text.component.scss',
})
export class EditableTextComponent {
  @Input() text: string = ''
  @Output() sendNewText = new EventEmitter<string>()
  editing = false

  startEdit() {
    this.editing = true
  }

  receiveInput($event: any) {
    this.text = $event
    this.editing = false
  }
}
