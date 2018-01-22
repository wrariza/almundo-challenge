import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loading.ComponentComponent } from './loading.component.component';

describe('Loading.ComponentComponent', () => {
  let component: Loading.ComponentComponent;
  let fixture: ComponentFixture<Loading.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loading.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loading.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
