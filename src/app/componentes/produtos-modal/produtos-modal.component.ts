
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produtos } from '../interface_produtos';

const body = document.querySelector('body');

@Component({
  selector: 'app-produtos-modal',
  templateUrl: './produtos-modal.component.html',
  styleUrls: ['./produtos-modal.component.css'],
})
export class ProdutosModalComponent implements OnInit {
  ngOnInit(): void {}

  statusModal: boolean = true;
  @Input()itens: Produtos[] = [];
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
