import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphoneDetailsComponent } from './headphone-details.component';

describe('HeadphoneDetailsComponent', () => {
  let component: HeadphoneDetailsComponent;
  let fixture: ComponentFixture<HeadphoneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadphoneDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadphoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
