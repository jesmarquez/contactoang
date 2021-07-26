import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactoModel } from '../models/contacto.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  private url = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  crearContacto( contacto: ContactoModel) {

    return this.http.post(`${ this.url }/contacto`, contacto)
            .pipe(
              map( (resp: any ) => {
                return contacto;
              })
            );
  }
}
