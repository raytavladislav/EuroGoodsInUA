import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixerDetailsComponent } from './mixer-details.component';

describe('MixerDetailsComponent', () => {
  let component: MixerDetailsComponent;
  let fixture: ComponentFixture<MixerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
