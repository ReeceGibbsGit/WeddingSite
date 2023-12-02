import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export type ButtonType = 'primary' | 'secondary';
export type ButtonSize = 'large' | 'small';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() public size: ButtonSize = 'large';
  @Input() public type: ButtonType = 'primary';
  @Input() public icon: string | undefined;
  @Output() public clickEvent = new EventEmitter<Event>();

  public onClick(event: Event): void {
    this.clickEvent.emit(event);
  }
}
