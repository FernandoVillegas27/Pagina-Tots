import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePrintColumnComponent } from './base-print-column.component';

describe('BasePrintColumnComponent', () => {
  let component: BasePrintColumnComponent;
  let fixture: ComponentFixture<BasePrintColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasePrintColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasePrintColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
