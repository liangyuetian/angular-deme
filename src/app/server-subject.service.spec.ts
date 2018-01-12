import { TestBed, inject } from '@angular/core/testing';

import { ServerSubjectService } from './server-subject.service';

describe('ServerSubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerSubjectService]
    });
  });

  it('should be created', inject([ServerSubjectService], (service: ServerSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
