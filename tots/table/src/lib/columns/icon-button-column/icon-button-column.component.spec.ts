import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonColumnComponent } from './icon-button-column.component';

describe('IconButtonColumnComponent', () => {
  let component: IconButtonColumnComponent;
  let fixture: ComponentFixture<IconButtonColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconButtonColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconButtonColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
