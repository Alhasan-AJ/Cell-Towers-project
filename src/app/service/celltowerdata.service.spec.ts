import { TestBed } from '@angular/core/testing';

import { CelltowerdataService } from './cell-towers-data.service';

describe('CelltowerdataService', () => {
  let service: CelltowerdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelltowerdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
