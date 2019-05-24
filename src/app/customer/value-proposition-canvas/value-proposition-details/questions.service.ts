import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  apiURL = 'https://valuepropositionapi.azurewebsites.net/api/question/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  httpOptionsPlainText = {
    headers: new HttpHeaders({
      'Content-Type':  'text/plain',
      responseType: 'text',
    })
  };

  constructor(private httpClient: HttpClient) { }

  public createQuestion(quest: any) {
    return this.httpClient.post(`${this.apiURL}create/`, quest, this.httpOptions);
  }

  public updateQuestion(quest: any) {
    return this.httpClient.put(`${this.apiURL}update/`, quest, this.httpOptions);
  }

  public deleteQuestion(qId: number) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain');
    return this.httpClient.delete(`${this.apiURL}delete/${qId}`, { headers });
  }

  public getQuestionByQTId(QTId: number) {
    return this.httpClient.get(`${this.apiURL}get/${QTId}`);
  }
}
