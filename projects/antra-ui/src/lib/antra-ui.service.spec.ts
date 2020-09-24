import { TestBed } from '@angular/core/testing';

import { AntraUiService } from './antra-ui.service';

describe('AntraUiService', () => {
  let service: AntraUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntraUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
