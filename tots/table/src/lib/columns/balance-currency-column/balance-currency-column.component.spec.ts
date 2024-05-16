import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceCurrencyColumnComponent } from './balance-currency-column.component';

describe('BalanceCurrencyColumnComponent', () => {
  let component: BalanceCurrencyColumnComponent;
  let fixture: ComponentFixture<BalanceCurrencyColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceCurrencyColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceCurrencyColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
