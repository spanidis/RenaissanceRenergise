import { TestBed } from '@angular/core/testing';

import { CoordinatesInteractionService } from './coordinates-interaction.service';

describe('CoordinatesInteractionService', () => {
  let service: CoordinatesInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinatesInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
