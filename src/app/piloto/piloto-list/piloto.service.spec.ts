/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PilotoService } from './piloto.service';

describe('Service: Piloto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PilotoService]
    });
  });

  it('should ...', inject([PilotoService], (service: PilotoService) => {
    expect(service).toBeTruthy();
  }));
});
