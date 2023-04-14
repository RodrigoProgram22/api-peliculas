import { TestBed } from '@angular/core/testing';

import { ApiPeliService } from './api-peli.service';

describe('ApiPeliService', () => {
  let service: ApiPeliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPeliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
