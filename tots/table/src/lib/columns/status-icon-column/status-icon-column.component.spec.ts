import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusIconColumnComponent } from './status-icon-column.component';

describe('StatusIconColumnComponent', () => {
  let component: StatusIconColumnComponent;
  let fixture: ComponentFixture<StatusIconColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusIconColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusIconColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
