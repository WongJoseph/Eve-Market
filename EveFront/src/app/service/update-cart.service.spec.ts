import { TestBed, inject } from '@angular/core/testing';

import { UpdateCartService } from './update-cart.service';

describe('UpdateCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateCartService]
    });
  });

  it('should be created', inject([UpdateCartService], (service: UpdateCartService) => {
    expect(service).toBeTruthy();
  }));
});
