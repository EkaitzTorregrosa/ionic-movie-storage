import { TestBed } from '@angular/core/testing';

import { MoviedbService } from './moviedb.service';

describe('MoviedbserviceService', () => {
  let service: MoviedbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviedbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
