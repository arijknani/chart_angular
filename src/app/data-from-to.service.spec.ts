import { TestBed } from '@angular/core/testing';

import { DataFromToService } from './data-from-to.service';

describe('DataFromToService', () => {
  let service: DataFromToService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFromToService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
