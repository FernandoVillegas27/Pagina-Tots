import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanColumnComponent } from './boolean-column.component';

describe('BooleanColumnComponent', () => {
  let component: BooleanColumnComponent;
  let fixture: ComponentFixture<BooleanColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooleanColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooleanColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
