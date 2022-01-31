import { TestBed } from '@angular/core/testing';

import { TagReadingService } from './tag-reading.service';

describe('TagReadingService', () => {
  let service: TagReadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagReadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
