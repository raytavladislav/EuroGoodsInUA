import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAndPaymentComponent } from './delivery-and-payment.component';

describe('DeliveryAndPaymentComponent', () => {
  let component: DeliveryAndPaymentComponent;
  let fixture: ComponentFixture<DeliveryAndPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryAndPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAndPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
