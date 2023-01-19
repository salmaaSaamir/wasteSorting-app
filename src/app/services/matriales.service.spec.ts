import { TestBed } from '@angular/core/testing';

import { MatrialesService } from './matriales.service';

describe('MatrialesService', () => {
  let service: MatrialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
