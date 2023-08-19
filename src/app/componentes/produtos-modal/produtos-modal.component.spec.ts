import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosModalComponent } from './produtos-modal.component';

describe('ProdutosModalComponent', () => {
  let component: ProdutosModalComponent;
  let fixture: ComponentFixture<ProdutosModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosModalComponent]
    });
    fixture = TestBed.createComponent(ProdutosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
