import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() personajes: Personaje[] = []

  @Input() nuevo: Personaje = { nombre: '', poder: 0 }

  agregarPersonaje() {
    if (this.nuevo.nombre.trim() == '') {
      return;
    }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    }
  }

}
