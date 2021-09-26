import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlucoseLevelsService {

  constructor(private readonly _httpClient: HttpClient) { }

  /**
   * Querries the whole database.
   *
   * todo: replace authentication information with a best-practice `angular interceptors`
   */
  getTableData(){
    const authHeaders: Headers = new HttpHeaders()

  }

}
