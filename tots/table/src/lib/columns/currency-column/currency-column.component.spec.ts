import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyColumnComponent } from './currency-column.component';

describe('CurrencyColumnComponent', () => {
  let component: CurrencyColumnComponent;
  let fixture: ComponentFixture<CurrencyColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
