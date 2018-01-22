import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Start } from './start.component';

describe('Start.ComponentComponent', () => {
  let component: Start.ComponentComponent;
  let fixture: ComponentFixture<Start.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Start.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Start.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
