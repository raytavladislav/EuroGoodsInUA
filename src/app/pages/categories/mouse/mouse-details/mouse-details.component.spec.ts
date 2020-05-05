import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseDetailsComponent } from './mouse-details.component';

describe('MouseDetailsComponent', () => {
  let component: MouseDetailsComponent;
  let fixture: ComponentFixture<MouseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
