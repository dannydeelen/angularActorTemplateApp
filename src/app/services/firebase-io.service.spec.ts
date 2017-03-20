import { TestBed, inject } from '@angular/core/testing';

import { FirebaseIOService } from './firebase-io.service';

describe('FirebaseIOService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseIOService]
    });
  });

  it('should ...', inject([FirebaseIOService], (service: FirebaseIOService) => {
    expect(service).toBeTruthy();
  }));
});
