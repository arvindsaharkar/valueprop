import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VpProducts } from './vp-products';
import { AppGlobal } from '../../../shared/app.global';

@Injectable({
  providedIn: 'root'
})
export class VpProductsService {
  apiURL = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient: HttpClient, private _global: AppGlobal) {
    this.apiURL = this._global.ApiUrl;
  }

  public createVPProduct(vpProduct: VpProducts, apiStr = 'product/') {
    return this.httpClient.post(`${this.apiURL + apiStr}create/`, vpProduct, this.httpOptions);
  }

  public updateVPProduct(canvas: VpProducts, apiStr = 'product/') {
    return this.httpClient.put(`${this.apiURL + apiStr}update/`, canvas, this.httpOptions);
  }

  public deleteVPProduct(vppId: number, apiStr = 'product/') {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain');
    return this.httpClient.delete(`${this.apiURL + apiStr}delete/${vppId}`, { headers });
  }

  public getVPProductByVPId(vpId: number, apiStr = 'product/') {
    return this.httpClient.get(`${this.apiURL + apiStr}get/${vpId}`);
  }
}
