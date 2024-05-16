import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsTableFullGroupComponent } from './tots-table-full-group.component';

describe('TotsTableFullGroupComponent', () => {
  let component: TotsTableFullGroupComponent;
  let fixture: ComponentFixture<TotsTableFullGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsTableFullGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsTableFullGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
