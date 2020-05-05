import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoudSpeakerDetailsComponent } from './loud-speaker-details.component';

describe('LoudSpeakerDetailsComponent', () => {
  let component: LoudSpeakerDetailsComponent;
  let fixture: ComponentFixture<LoudSpeakerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoudSpeakerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoudSpeakerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
