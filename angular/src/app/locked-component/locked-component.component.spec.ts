import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedComponentComponent } from './locked-component.component';

describe('LockedComponentComponent', () => {
  let component: LockedComponentComponent;
  let fixture: ComponentFixture<LockedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
