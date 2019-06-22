import { TestBed } from '@angular/core/testing';

import { StorageService } from '../../shared/services/storage.service';

describe('WebStorageService', () => {
  let service: StorageService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should render storage methods', () => {
    service.saveToWebStorage('test', 'success');
    expect(service.retrieveFromWebStorage('test')).toBeTruthy();
    expect(service.retrieveFromWebStorage('test')).toBe('\"success\"');
  });

});
