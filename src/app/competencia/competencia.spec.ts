import { TestBed } from '@angular/core/testing';

import { Competencia } from './competencia';

describe('Competencia', () => {
  let service: Competencia;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Competencia);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
