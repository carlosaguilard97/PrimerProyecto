import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroe.component.html'
})
export class HeroesComponent {
    nombre: String = 'Aquaman'
    edad: number = 500;

    
    get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }
    
    obtenerNombre(): string {
        let nombre:string = 'Batman';
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre() {
        this.nombre = 'Spiderman'
    }

    cambiarEdad() {
        this.edad = 17;
    }

}