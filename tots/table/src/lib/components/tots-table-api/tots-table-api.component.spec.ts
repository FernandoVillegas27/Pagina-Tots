import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsTableApiComponent } from './tots-table-api.component';

describe('TotsTableApiComponent', () => {
  let component: TotsTableApiComponent;
  let fixture: ComponentFixture<TotsTableApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsTableApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsTableApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
