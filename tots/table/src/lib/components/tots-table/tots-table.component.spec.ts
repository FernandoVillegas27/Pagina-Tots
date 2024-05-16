import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsTableComponent } from './tots-table.component';

describe('TotsTableComponent', () => {
  let component: TotsTableComponent;
  let fixture: ComponentFixture<TotsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
