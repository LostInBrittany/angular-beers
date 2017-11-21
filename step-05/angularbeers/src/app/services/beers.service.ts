import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Beer } from '../beer';

@Injectable()
export class BeersService {
  // URL to web API
  private beerUrl = 'beers/besers.json';

  constructor(
    private http: HttpClient) {

  }

  /** GET beers from the server */
  getBeers (): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beerUrl)
    .pipe(
      catchError(this.handleError('getBeers', []));
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }    
}