import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreMenuColumnComponent } from './more-menu-column.component';

describe('MoreMenuColumnComponent', () => {
  let component: MoreMenuColumnComponent;
  let fixture: ComponentFixture<MoreMenuColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreMenuColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreMenuColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
