import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 10000,
        },
        {
            nombre: 'Vegeta',
            poder: 9000,
        },
        {
            nombre: 'Piccolo',
            poder: 8000,
        }
    ];
    
    public get personajes() {
        return [...this._personajes];
    }
    
    agregarNuevoPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}