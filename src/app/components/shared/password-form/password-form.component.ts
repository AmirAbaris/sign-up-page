import { ChangeDetectionStrategy, Component, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, ReactiveFormsModule, NgIf],
  templateUrl: './password-form.component.html',
  styleUrl: './password-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordFormComponent),
      multi: true
    }
  ]
})
export class PasswordFormComponent implements ControlValueAccessor {
  //#region Properties
  public passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  public hide = signal(true);
  private onChange: (value: string) => void = () => { };
  private onTouched: () => void = () => { };
  //#endregion

  //#region Main logic methods
  public writeValue(value: string): void {
    if (value !== undefined) {
      this.passwordFormControl.setValue(value, { emitEvent: false });
    }
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
    this.passwordFormControl.valueChanges.subscribe((value: string | null) => this.onChange(value || ''));
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.passwordFormControl.disable() : this.passwordFormControl.enable();
  }

  public clickEvent(event: MouseEvent): void {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  //#endregion
}
