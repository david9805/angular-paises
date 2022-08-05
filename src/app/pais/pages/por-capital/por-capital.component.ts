import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  termino:string = '';
  hayError : boolean = false;
  paises : Country [] = [];

  constructor(private ciudadService:PaisService) { }

  buscar(termino : string){
    this.termino = termino;
    
    this.ciudadService.buscarCiudad(this.termino).subscribe((ciudad)=>{
      console.log(ciudad);
      this.paises = ciudad;      
      this.hayError = false;
    },((err) =>{
      this.hayError = true;
      this.paises = [];
    }));
  }


}
