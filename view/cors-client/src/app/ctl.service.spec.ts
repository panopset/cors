import { TestBed } from '@angular/core/testing';

import { CtlService } from './ctl.service';

describe('CtlService', () => {
  let service: CtlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CtlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
