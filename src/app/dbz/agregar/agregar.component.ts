import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  // @Input() personajes: Personaje[] = []

  @Input() nuevo: Personaje = { nombre: '', poder: 0 }

  constructor( private dbzService: DbzService) { }

  // @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregarPersonaje() {
    if (this.nuevo.nombre.trim() == '') {
      return;
    }
    this.dbzService.agregarNuevoPersonaje(this.nuevo);
  //   this.nuevoPersonaje.emit(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 }
  }

}
