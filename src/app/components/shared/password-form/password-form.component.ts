import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './password-form.component.html',
  styleUrl: './password-form.component.scss'
})
export class PasswordFormComponent {
  //#region Properties
  emailFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  hide = signal(true);
  //#endregion

  //#region Main logic methods
  public clickEvent(event: MouseEvent): void {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  //#endregion
}
