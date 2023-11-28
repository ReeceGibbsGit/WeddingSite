import { Component, OnDestroy, OnInit } from '@angular/core';
import { WindowSizeService } from './services/window-size.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'wedding-site';
  private windowResizeSubscription: Subscription = new Subscription();

  constructor(
    private windowSizeService: WindowSizeService,
    private modalService: NgbModal
  ) {}

  public ngOnInit(): void {
    this.windowResizeSubscription = this.windowSizeService
      .getWindowSize()
      .subscribe((windowWidth) => {
        // use this in the future
      });
  }

  public ngOnDestroy(): void {
    if (this.windowResizeSubscription) {
      this.windowResizeSubscription.unsubscribe();
    }
  }

  public openModal(content: any) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.content = content;
  }
}
