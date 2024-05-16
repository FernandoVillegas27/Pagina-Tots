import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePrintFieldComponent } from './base-print-field.component';

describe('BasePrintFieldComponent', () => {
  let component: BasePrintFieldComponent;
  let fixture: ComponentFixture<BasePrintFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasePrintFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasePrintFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
