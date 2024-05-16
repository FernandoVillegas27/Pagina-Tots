import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringColumnComponent } from './string-column.component';

describe('StringColumnComponent', () => {
  let component: StringColumnComponent;
  let fixture: ComponentFixture<StringColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
