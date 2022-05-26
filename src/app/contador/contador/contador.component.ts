import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h3>la base es: {{base}}</h3>
        <button (click)="acumular(base)">+</button>
        <span>{{contador}}</span>
        <button (click)="acumular(-(base))">-</button>
    `
})
export class ContadorComponent {
    title: string = 'Contador';
    contador:number = 0;
    base: number = 5;
    // sumar(){
    //   this.contador++
    // }
    // restar(){
    //   this.contador--
    // }
    acumular(valor: number){
      this.contador += valor
    }
}