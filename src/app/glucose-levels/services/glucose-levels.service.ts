import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {AuthService} from './auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlucoseLevelsService {
  // todo: extract to app config
  private readonly baseUrl = 'http://127.0.0.1:8000'
  private readonly tableListEndpointUrl = '/levels/'

  constructor(private readonly _httpClient: HttpClient,
              private readonly _authService: AuthService) {
  }

  /**
   * Querries the whole database.
   *
   * todo: replace authentication information with a best-practice `angular interceptors`
   * todo: create correct interface to handle the DTO arriving!
   */
  getTableData(): Observable<any> {
    const authToken = this._authService.getTokenSubject().value;
    if(!authToken){
      return of(null); // todo: force user to login first
    }
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Token ${authToken}`,
    })

    const url = `${this.baseUrl}${this.tableListEndpointUrl} `
    return this._httpClient.get(url, {headers}).pipe(
      catchError((error: Error) => {
        // todo: example of how to handle http errors before it arrives to the component; no time to implement fully now
        console.error("handle error now!", error)
        throw error;
      })
    )

  }

}
