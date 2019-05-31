import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppGlobal } from '../../shared/app.global';

@Injectable({
  providedIn: 'root'
})
export class BusinessModelService {
  apiURL = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient: HttpClient, protected _global: AppGlobal) {
    this.apiURL = this._global.ApiUrl + 'businessmodel/';
  }

  // Find All (HttpGet)
  public getAllBM() {
    return this.httpClient.get(`${this.apiURL}findall/`);
  }

  // Search (HttpGet)
  public getBMByKeywords(keyword: string) {
    return this.httpClient.get(`${this.apiURL}search/${keyword}`);
  }

  public createBM(bmodel: any) {
    return this.httpClient.post(`${this.apiURL}create/`, bmodel, this.httpOptions);
  }

  public updateBM(bmodel: any) {
    return this.httpClient.put(`${this.apiURL}update/`, bmodel, this.httpOptions);
  }

  // Get by Business Model (HttpGet)
  public getBMById(bmId: number) {
    return this.httpClient.get(`${this.apiURL}getdetails/${bmId}`);
  }

  // Delete (HttpDelete)
  public deleteBM(bmId: number) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain');
    return this.httpClient.delete(`${this.apiURL}delete/${bmId}`, { headers });
  }

  // Get All Details (HttpGet)
  public getAllDetailsBMById(bmId: number) {
    return this.httpClient.get(`${this.apiURL}getalldetails/${bmId}`);
  }
}
