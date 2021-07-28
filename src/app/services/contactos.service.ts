import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ContactoModel } from '../models/contacto.model';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  private apiEndPoint: string = "";
  
  constructor( private http: HttpClient ) {
    this.apiEndPoint = environment.apiEndPoint;
  }

  crearContacto( contacto: ContactoModel) {

    return this.http.post(`${ this.apiEndPoint }/contacto`, contacto)
            .pipe(
              map( (resp: any ) => {
                return contacto;
              }),
              catchError( this.handleError )
            );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');

  }

}
