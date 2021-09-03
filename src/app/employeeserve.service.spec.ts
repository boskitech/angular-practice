import { TestBed } from '@angular/core/testing';

import { EmployeeserveService } from './employeeserve.service';

describe('EmployeeserveService', () => {
  let service: EmployeeserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
