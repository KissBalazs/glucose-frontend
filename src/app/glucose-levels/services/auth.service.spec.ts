import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initiate a http call if login is called', () => {
    service.login(); // I ran out of time here but wanted to create an async test here.

    httpTestingController.expectOne((req) => {
      return req.method === 'POST'
    }).flush(null, {
      status: 200,
      statusText: 'OK'
    })
  })

  it('Should not have token initially', () => {
    expect(service.getTokenSubject().value).toBeNull();
  })
});
