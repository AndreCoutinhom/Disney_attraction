import { TestBed } from '@angular/core/testing';

import { Atracoes } from './atracoes';

describe('Atracoes', () => {
  let service: Atracoes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Atracoes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
