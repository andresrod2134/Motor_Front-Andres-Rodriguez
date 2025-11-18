import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { AnuncioDetail } from './anuncio-detail';

@Injectable({
  providedIn: 'root',
})
export class AnuncioService {
  private apiUrl: string = environment.baseUrl + 'anuncios';

  constructor(private http: HttpClient) {}

  getAnuncios(): Observable<AnuncioDetail[]> {
    return this.http.get<AnuncioDetail[]>(this.apiUrl)
  }

  getAnuncio(id: string): Observable<AnuncioDetail> {
    return this.http.get<AnuncioDetail>(this.apiUrl + '/' + id);
  }

  createAnuncio(book: AnuncioDetail): Observable<AnuncioDetail> {
    return this.http.post<AnuncioDetail>(this.apiUrl, book);
  }

  //createAuthorBook(idBook: number, idAuthor: number) {
    //return this.http.post(
      //this.apiUrl + '/' + idBook + '/authors/' + idAuthor,
      //undefined
    //);
  //}
}