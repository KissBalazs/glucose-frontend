import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

/**
 * Authentication service.
 * @param  authTokenSubject is the async, behaviour subject representation of the auth token of the user.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null)

  constructor(private readonly _httpClient: HttpClient) { }

  /**
   * Authenticates the user.
   *
   * This is a hard-wired "admin-admin" as there is no time to implement a proper form, with error handling etc.
   */
  public login(){
    const body = {
      username: 'admin',
      password: 'admin'
    }
    return this._httpClient.post<ITokenResponse>('http://127.0.0.1:8000/api-token-auth/', body).subscribe(
      (res: ITokenResponse) => {
        this.authTokenSubject.next(res?.token)
      }, err => {
        console.error("err: ", err)
      }
    )
  }

  public logout(){
    this.authTokenSubject.next(null);
  }

  public getTokenSubject(){
    return this.authTokenSubject;
  }
}

export interface ITokenResponse {
  token: string;
}
