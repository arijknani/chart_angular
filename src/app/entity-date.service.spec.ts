import { TestBed } from '@angular/core/testing';

import { EntityDateService } from './entity-date.service';

describe('EntityDateService', () => {
  let service: EntityDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
