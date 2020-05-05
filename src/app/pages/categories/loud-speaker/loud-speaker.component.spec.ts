import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoudSpeakerComponent } from './loud-speaker.component';

describe('LoudSpeakerComponent', () => {
  let component: LoudSpeakerComponent;
  let fixture: ComponentFixture<LoudSpeakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoudSpeakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoudSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
