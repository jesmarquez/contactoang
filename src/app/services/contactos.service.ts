import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactoModel } from '../models/contacto.model';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

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
              })
            );
  }
}
