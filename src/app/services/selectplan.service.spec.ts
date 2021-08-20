import { TestBed } from '@angular/core/testing';

import { SelectplanService } from './selectplan.service';

describe('SelectplanService', () => {
  let service: SelectplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
