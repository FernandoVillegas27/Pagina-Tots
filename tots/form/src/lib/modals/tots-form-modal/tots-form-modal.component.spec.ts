import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsFormModalComponent } from './tots-form-modal.component';

describe('TotsFormModalComponent', () => {
  let component: TotsFormModalComponent;
  let fixture: ComponentFixture<TotsFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
