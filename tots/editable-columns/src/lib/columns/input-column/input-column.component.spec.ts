import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputColumnComponent } from './input-column.component';

describe('InputColumnComponent', () => {
  let component: InputColumnComponent;
  let fixture: ComponentFixture<InputColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
