import { TestBed } from '@angular/core/testing';

import { TotsFormModalService } from './tots-form-modal.service';

describe('TotsFormModalService', () => {
  let service: TotsFormModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotsFormModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
