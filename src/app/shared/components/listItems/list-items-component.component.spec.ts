import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsComponentComponent } from './list-items-component.component';

describe('ListItemsComponentComponent', () => {
  let component: ListItemsComponentComponent;
  let fixture: ComponentFixture<ListItemsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
