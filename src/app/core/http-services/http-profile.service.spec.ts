import { TestBed, inject } from '@angular/core/testing';

import { HttpProfileService } from './http-profile.service';

describe('HttpProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpProfileService]
    });
  });

  it('should be created', inject([HttpProfileService], (service: HttpProfileService) => {
    expect(service).toBeTruthy();
  }));
});
