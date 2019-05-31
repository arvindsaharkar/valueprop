import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppGlobal } from '../../../shared/app.global';

@Injectable({
  providedIn: 'root'
})
export class BmChartService {
  apiURL = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient: HttpClient, protected _global: AppGlobal) {
    this.apiURL = this._global.ApiUrl;
  }

  public createBMSegment(bmSegmentObj: any, segment = 'businessmodelvalueproposition') {
    return this.httpClient.post(`${this.apiURL + segment}/create/`, bmSegmentObj, this.httpOptions);
  }

  public updateBMSegment(bmSegmentObj: any, segment = 'businessmodelvalueproposition') {
    return this.httpClient.put(`${this.apiURL + segment}/update/`, bmSegmentObj, this.httpOptions);
  }

  public deleteBMSegment(BMSegmentId: number, segment = 'businessmodelvalueproposition') {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain');
    return this.httpClient.delete(`${this.apiURL + segment}/delete/${BMSegmentId}`, { headers });
  }

  public getBMSegmentDetails(BMSegmentId: number, segment = 'businessmodelvalueproposition') {
    return this.httpClient.get(`${this.apiURL + segment}/get/${BMSegmentId}`)
    .toPromise()
    .then(res => res)
    .catch(err => {
        return Promise.reject(err.json().error  || 'Server error');
    });
  }
}
