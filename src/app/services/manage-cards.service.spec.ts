import { TestBed } from '@angular/core/testing';

import { ManageCardsService } from './manage-cards.service';

describe('ManageCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageCardsService = TestBed.get(ManageCardsService);
    expect(service).toBeTruthy();
  });
});
