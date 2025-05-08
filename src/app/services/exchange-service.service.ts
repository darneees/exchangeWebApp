import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ExchangeServiceService {
  private apiUrl = 'https://api-brl-exchange.actionlabs.com.br/api/1.0/open/currentExchangeRate';
  private apiKey = 'RVZGOGHEV2KORLNA';

  constructor(private http: HttpClient) {}

  getExchangeRate(code: string): Observable<number> {
    const params = {
      from_symbol: code,
      to_symbol: 'BRL',
      apiKey: this.apiKey
    };

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(response => {
        if (response?.success && response?.exchangeRate) {
          return response.exchangeRate;
        } else {
          throw new Error('Invalid currency code or no result');
        }
      }),
      catchError(() => throwError(() => new Error('Invalid currency code')))
    );
  }
}