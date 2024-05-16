import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsFormComponent } from './tots-form.component';

describe('TotsFormComponent', () => {
  let component: TotsFormComponent;
  let fixture: ComponentFixture<TotsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
