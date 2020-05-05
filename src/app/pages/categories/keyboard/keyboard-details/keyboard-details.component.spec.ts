import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardDetailsComponent } from './keyboard-details.component';

describe('KeyboardDetailsComponent', () => {
  let component: KeyboardDetailsComponent;
  let fixture: ComponentFixture<KeyboardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
