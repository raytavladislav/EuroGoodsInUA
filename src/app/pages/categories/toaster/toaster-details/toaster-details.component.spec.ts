import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterDetailsComponent } from './toaster-details.component';

describe('ToasterDetailsComponent', () => {
  let component: ToasterDetailsComponent;
  let fixture: ComponentFixture<ToasterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToasterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
