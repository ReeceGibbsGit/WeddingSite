import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export type ButtonType = 'primary' | 'secondary' | 'success' | 'failure';
export type ButtonSize = 'large' | 'medium' | 'small';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() public size: ButtonSize = 'medium';
  @Input() public type: ButtonType = 'primary';
  @Input() public icon: string | undefined;
  @Input() public disabled: boolean = false;

  @Output() public clickEvent = new EventEmitter<Event>();

  public onClick(event: Event): void {
    this.clickEvent.emit(event);
  }
}
