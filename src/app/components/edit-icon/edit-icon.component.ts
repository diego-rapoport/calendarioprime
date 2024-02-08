import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-edit-icon',
  standalone: true,
  imports: [],
  templateUrl: './edit-icon.component.html',
  styleUrl: './edit-icon.component.scss',
})
export class EditIconComponent {
  @Output() sendEdit = new EventEmitter<boolean>()

  editText() {
    this.sendEdit.emit(true)
  }
}
