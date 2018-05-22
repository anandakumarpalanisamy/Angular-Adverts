import { TestBed, inject } from '@angular/core/testing';

import { HttpAdvertsService } from './http-adverts.service';

describe('HttpAdvertsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpAdvertsService]
    });
  });

  it('should be created', inject([HttpAdvertsService], (service: HttpAdvertsService) => {
    expect(service).toBeTruthy();
  }));
});
