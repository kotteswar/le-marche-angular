import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedShoppedComponent } from './liked-shopped.component';

describe('LikedShoppedComponent', () => {
  let component: LikedShoppedComponent;
  let fixture: ComponentFixture<LikedShoppedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedShoppedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedShoppedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
