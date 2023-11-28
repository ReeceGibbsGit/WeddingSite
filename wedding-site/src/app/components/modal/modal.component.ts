import { Component, Input, TemplateRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() public title: string = 'Title here';
  @Input() public content: TemplateRef<any> | null = null;

  constructor(public activeModal: NgbActiveModal) {}
}
