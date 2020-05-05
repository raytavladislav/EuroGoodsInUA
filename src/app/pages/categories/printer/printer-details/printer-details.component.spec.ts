import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterDetailsComponent } from './printer-details.component';

describe('PrinterDetailsComponent', () => {
  let component: PrinterDetailsComponent;
  let fixture: ComponentFixture<PrinterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
