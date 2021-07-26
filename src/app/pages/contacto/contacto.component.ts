import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactoModel } from '../../models/contacto.model'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto: ContactoModel = new ContactoModel();
  constructor() { }

  ngOnInit(): void {
  }

  guardar(form: NgForm) {

    if ( form.invalid) {
      console.log('Formulario no válido');
    }
    console.log(form);
    console.log(this.contacto);
  }
}
