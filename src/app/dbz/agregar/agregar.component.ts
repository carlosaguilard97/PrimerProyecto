import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  // @Input() personajes: Personaje[] = []

  @Input() nuevo: Personaje = { nombre: '', poder: 0 }

  @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregarPersonaje() {
    if (this.nuevo.nombre.trim() == '') {
      return;
    }
    this.nuevoPersonaje.emit(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 }
  }

}
