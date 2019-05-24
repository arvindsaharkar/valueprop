import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValuePropositionCanvas } from './value-proposition-canvas';
import { AppGlobal } from '../../shared/app.global';

@Injectable({
  providedIn: 'root'
})
export class ValuePropositionCanvasService {
  apiURL = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient: HttpClient, protected _global: AppGlobal) {
    this.apiURL = this._global.ApiUrl + 'valueproposition/';
  }

  public createValueProposition(canvas: ValuePropositionCanvas) {
    console.log(canvas);
    return this.httpClient.post(`${this.apiURL}create/`, canvas, this.httpOptions);
  }

  public updateValueProposition(canvas: ValuePropositionCanvas) {
    console.log(canvas);
    return this.httpClient.put(`${this.apiURL}update/`, canvas, this.httpOptions);
  }

  public deleteValueProposition(vpId: number) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain');
    return this.httpClient.delete(`${this.apiURL}delete/${vpId}`, { headers });
  }

  public getValuePropositionById(vpId: number) {
    return this.httpClient.get(`${this.apiURL}getdetails/${vpId}`);
  }

  public getValuePropositionBySearch(keyword: string) {
    return this.httpClient.get(`${this.apiURL}search/${keyword}`);
  }

  public getAllValueProposition() {
    return this.httpClient.get(`${this.apiURL}findall`);
  }

  public getAllDetailsValueProposition(vpId: number) {
    return this.httpClient.get(`${this.apiURL}getalldetails/${vpId}`);
  }

  public getValuePropositionByKeywords(keyword: string) {
    return this.httpClient.get(`${this.apiURL}search/${keyword}`);
  }
}
