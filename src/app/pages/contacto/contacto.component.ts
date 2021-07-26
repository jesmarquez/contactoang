import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactosService } from 'src/app/services/contactos.service';
import { ContactoModel } from '../../models/contacto.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto: ContactoModel = new ContactoModel();
  
  constructor( private contactosService: ContactosService,  private router:Router ) { }

  ngOnInit(): void {
  }

  guardar(form: NgForm) {
    console.log(form);

    if ( form.invalid ) {
      Object.values( form.controls ).forEach( control => {
        control.markAsTouched();
      });
    } else {
        console.log(this.contacto);
        let today = new Date();
        let month = today.getMonth();
        month++;
        let mysqlDate = today.getFullYear() + '/' + month.toString() + '/' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' +  today.getSeconds();
        this.contacto.creado = mysqlDate;
        this.contacto.actualizado = mysqlDate;

        this.contactosService.crearContacto( this.contacto )
        .subscribe( resp => {
          this.router.navigate([ '/home' ]);
        });
      
    }

  }
}
