import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

 heroes: string[] = [
   'Aquaman', 'Superman', 'Batman', 'Flash', 'Wonder Woman', 'Green Lantern'
 ]
 heroeBorrado: string = '';
 borrarHeroe() {
  //  this.heroes = this.heroes.filter(heroe => heroe != 'Aquaman')
  this.heroeBorrado =  this.heroes.shift() || '';
 }

}
