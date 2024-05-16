import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStringColumnComponent } from './two-string-column.component';

describe('TwoStringColumnComponent', () => {
  let component: TwoStringColumnComponent;
  let fixture: ComponentFixture<TwoStringColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoStringColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoStringColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
