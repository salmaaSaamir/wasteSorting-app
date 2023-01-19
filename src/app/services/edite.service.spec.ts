import { TestBed } from '@angular/core/testing';

import { EditeService } from './edite.service';

describe('EditeService', () => {
  let service: EditeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
