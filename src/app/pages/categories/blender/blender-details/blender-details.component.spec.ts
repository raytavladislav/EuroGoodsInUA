import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlenderDetailsComponent } from './blender-details.component';

describe('BlenderDetailsComponent', () => {
  let component: BlenderDetailsComponent;
  let fixture: ComponentFixture<BlenderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlenderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlenderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
