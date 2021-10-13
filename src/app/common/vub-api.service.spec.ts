import { TestBed } from '@angular/core/testing';

import { VubApiService } from './vub-api.service';

describe('VubApiService', () => {
  let service: VubApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VubApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
