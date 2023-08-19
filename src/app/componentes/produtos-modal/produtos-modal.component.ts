import { Component, EventEmitter, Output } from '@angular/core';

const body = document.querySelector('body');

@Component({
  selector: 'app-produtos-modal',
  templateUrl: './produtos-modal.component.html',
  styleUrls: ['./produtos-modal.component.css'],
})
export class ProdutosModalComponent {
  statusModal: boolean = true;
  @Output() mudouModal = new EventEmitter();

  fecharModal() {
    this.statusModal = false;
    this.mudouModal.emit(this.statusModal);
    if (body) {
      body.style.overflow = 'scroll';
    }
  }

  esconderScroll() {
    if (this.statusModal) {
      if (body) {
        body.style.overflow = 'hidden';
      }
    }
  }
}
