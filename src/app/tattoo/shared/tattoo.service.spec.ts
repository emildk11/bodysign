import { TestBed, inject } from '@angular/core/testing';

import { TattooService } from './tattoo.service';

describe('TattooService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TattooService]
    });
  });

  it('should be created', inject([TattooService], (service: TattooService) => {
    expect(service).toBeTruthy();
  }));
});
