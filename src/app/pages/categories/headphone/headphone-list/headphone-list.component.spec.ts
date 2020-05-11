import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphoneListComponent } from './headphone-list.component';

describe('HeadphoneListComponent', () => {
  let component: HeadphoneListComponent;
  let fixture: ComponentFixture<HeadphoneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadphoneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadphoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
