import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personajes:Personaje[] = [
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

  nuevo: Personaje = {
    nombre: 'Krillin',
    poder: 1000,
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregarPersonaje(){
    if(this.nuevo.nombre.trim() == ''){
      return;
    }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    }
  }

  // cambiarNombre(event:any){
  //   console.log(event); 
  // }
}
