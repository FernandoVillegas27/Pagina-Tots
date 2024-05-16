import { TestBed } from '@angular/core/testing';

import { TotsFormApiService } from './tots-form-api.service';

describe('TotsFormApiService', () => {
  let service: TotsFormApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotsFormApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
