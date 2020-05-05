import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillDetailsComponent } from './grill-details.component';

describe('GrillDetailsComponent', () => {
  let component: GrillDetailsComponent;
  let fixture: ComponentFixture<GrillDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
