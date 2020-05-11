import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillListComponent } from './grill-list.component';

describe('GrillListComponent', () => {
  let component: GrillListComponent;
  let fixture: ComponentFixture<GrillListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
