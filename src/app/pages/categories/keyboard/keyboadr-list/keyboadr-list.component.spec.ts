import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboadrListComponent } from './keyboadr-list.component';

describe('KeyboadrListComponent', () => {
  let component: KeyboadrListComponent;
  let fixture: ComponentFixture<KeyboadrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboadrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboadrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
