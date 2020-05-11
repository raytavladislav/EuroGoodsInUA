import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterListComponent } from './toaster-list.component';

describe('ToasterListComponent', () => {
  let component: ToasterListComponent;
  let fixture: ComponentFixture<ToasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
