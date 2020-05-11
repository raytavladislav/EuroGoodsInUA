import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlenderListComponent } from './blender-list.component';

describe('BlenderListComponent', () => {
  let component: BlenderListComponent;
  let fixture: ComponentFixture<BlenderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlenderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlenderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
