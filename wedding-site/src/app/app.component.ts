import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { DeviceType, WindowSizeService } from './services/window-size.service';
import { Observable, Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'wedding-site';
  public isSmallDevice$: Observable<boolean>;

  constructor(
    private windowSizeService: WindowSizeService,
    private modalService: NgbModal
  ) {
    this.isSmallDevice$ = this.windowSizeService.isWidthLessThanBreakpoint(
      DeviceType.Tablet
    );
  }

  public openModal(title: string, content: TemplateRef<any>) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.content = content;
  }

  public celebrate() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
}
