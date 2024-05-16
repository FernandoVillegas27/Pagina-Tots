import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceCurrencyIconColumnComponent } from './balance-currency-icon-column.component';

describe('BalanceCurrencyIconColumnComponent', () => {
  let component: BalanceCurrencyIconColumnComponent;
  let fixture: ComponentFixture<BalanceCurrencyIconColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceCurrencyIconColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceCurrencyIconColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
