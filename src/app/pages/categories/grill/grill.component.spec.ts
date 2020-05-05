import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillComponent } from './grill.component';

describe('GrillComponent', () => {
  let component: GrillComponent;
  let fixture: ComponentFixture<GrillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
