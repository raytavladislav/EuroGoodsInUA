import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoudSpeakerListComponent } from './loud-speaker-list.component';

describe('LoudSpeakerListComponent', () => {
  let component: LoudSpeakerListComponent;
  let fixture: ComponentFixture<LoudSpeakerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoudSpeakerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoudSpeakerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
